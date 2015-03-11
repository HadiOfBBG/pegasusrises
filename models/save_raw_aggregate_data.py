from google.appengine.ext import ndb
from google.appengine.api import urlfetch
import datetime
import json
import os
import jinja2
import webapp2
from google.appengine.ext import ndb

class SaveAggregateRawPostedData(ndb.Model):
  """NDB model to temporarily store the POST request."""
  posted_json_data = ndb.JsonProperty()
  submission_unique_identity = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)

