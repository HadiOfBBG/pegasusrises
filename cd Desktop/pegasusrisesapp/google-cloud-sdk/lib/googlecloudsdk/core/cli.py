# Copyright 2013 Google Inc. All Rights Reserved.

"""A module to make it easy to set up and run CLIs in the Cloud SDK."""

from oauth2client import client

from googlecloudsdk.core import exceptions
from googlecloudsdk.core import log
from googlecloudsdk.core.credentials import store as c_store


__all__ = ['Credentials', 'Http']


class Error(exceptions.Error):
  """Exceptions for the cli module."""


class CannotRefreshAuthTokenError(Error, client.AccessTokenRefreshError):
  """An exception raised when the auth tokens fail to refresh."""

  def __init__(self, msg):
    auth_command = '$ gcloud auth login'
    message = ('There was a problem refreshing your current auth tokens: '
               '{0}.  Please run\n  {1}.'.format(msg, auth_command))
    super(CannotRefreshAuthTokenError, self).__init__(message)


def Credentials():
  """Get the currently active credentials.

  This function loads account credentials via core.account property
  of core.properties module.

  These credentials will be refreshed before being returned, so it makes sense
  to cache the value returned for short-lived programs.

  Returns:
    An active, valid credentials object.

  Raises:
    c_store.Error: If an error loading the credentials occurs.
  """
  return c_store.Load()


def Http(auth=True, creds=None, timeout=None):
  """Get an httplib2.Http object for working with the Google API.

  Args:
    auth: bool, True if the http object returned should be authorized.
    creds: oauth2client.client.Credentials, If auth is True and creds is not
        None, use those credentials to authorize the httplib2.Http object.
    timeout: double, The timeout in seconds to pass to httplib2.  This is the
        socket level timeout.  If timeout is None, timeout is infinite.

  Returns:
    An authorized httplib2.Http object, or a regular httplib2.Http object if no
    credentials are available.
  """

  # TODO(user): Have retry-once-if-denied logic, to allow client tools to not
  # worry about refreshing credentials.

  http = c_store._Http(timeout=timeout)  # pylint:disable=protected-access
  if auth:
    if not creds:
      creds = Credentials()
    http = creds.authorize(http)
    # Re-wrap the request method to put in our own error handling.
    http = _WrapRequest(http)
  return http


def _WrapRequest(http):
  """Wraps the original http.request method with one that wraps an exception.

  We need to do this because oauth2client does similar wrapping when you
  authorize the http object.  Because of this, a credential refresh error
  can get raised wherever someone makes an http request.  With no common place
  to handle this exception, we do more wrapping here so we can convert it to
  one of our typed exceptions.

  Args:
    http: The original http object.

  Returns:
    http, The same http object but with the request method wrapped.
  """
  orig_request = http.request
  def NewRequest(*args, **kwargs):
    try:
      return orig_request(*args, **kwargs)
    except client.AccessTokenRefreshError as e:
      log.debug('Exception caught during HTTP request: %s', e.message,
                exc_info=True)
      raise CannotRefreshAuthTokenError(e.message)

  http.request = NewRequest

  # apitools needs this attribute to do credential refreshes during batch API
  # requests.
  if hasattr(orig_request, 'credentials'):
    setattr(http.request, 'credentials', orig_request.credentials)

  return http
