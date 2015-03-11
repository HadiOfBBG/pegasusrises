import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom
from models import pegasusFiles
import urllib
from google.appengine.api import urlfetch
from poster.encode import multipart_encode, MultipartParam
import logging
from google.appengine.api import users
import json
from google.appengine.api import files
import cloudstorage as gcs
from google.appengine.api import app_identity
import webapp2
from pegasus_email import EmailHandler as EmailHandler
import time



retry_params = gcs.RetryParams(initial_delay=0.2,
                                          max_delay=5.0,
                                          backoff_factor=2,
                                          max_retry_period=15)

gcs.set_default_retry_params(retry_params)
pegasusrise_converter_api = 'http://msrc.gopagoda.io/api/sendXLSForms'
urlfetch.set_default_fetch_deadline(60)


class CSVUploadHandler(JinjaTemplating,blobstore_handlers.BlobstoreUploadHandler,blobstore_handlers.BlobstoreDownloadHandler):

    def get(self):
        JinjaTemplating.render_template_only(self,'hadi_test.html')

    
    def post(self):
        # EmailHandler.sendEmail()
        content_from_server = json.loads(self.request.body)
        url = content_from_server['downloadUrl']

        form_fields = {
        "filename":"guess",
        "url":url
        }

        form_data = urllib.urlencode(form_fields)
        result = urlfetch.fetch(url=pegasusrise_converter_api,
        payload=form_data,
        method=urlfetch.POST,
        headers={'Content-Type': 'application/x-www-form-urlencoded'})

        # self.response.out.write(result.content)
        if "Successful form upload" in result.content:
            return self.response.out.write("success")

        else:
            return self.response.out.write("error")
        