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
from google.appengine.api import urlfetch
from poster.encode import multipart_encode, MultipartParam
import logging
from google.appengine.api import users
from db_from_google_sheets import DbFromGoogleSheet
import os
import urllib
import webapp2
from google.appengine.api import files


class ServeHandler(blobstore_handlers.BlobstoreDownloadHandler):
  def get(self, resource):
    resource = urllib.unquote(resource)
    blob_info = blobstore.BlobInfo.get(resource)
    self.response.out.write(blob_info)
    # self.send_blob(blob_info)
