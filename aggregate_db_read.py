import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom

class ReadDataFromPegasus(object):
    """docstring for ReadDataFromPegasus"""
    def __init__(self, arg):
        super(ReadDataFromPegasus, self).__init__()
        self.arg = arg


    def getFormIdsGeneratedByAggregate(self):
        pass

