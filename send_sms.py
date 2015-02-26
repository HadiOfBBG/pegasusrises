import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom
from urllib2 import Request, urlopen, URLError
from google.appengine.api import memcache
from questions_details_from_google_sheets import QuestionsDetailsFromGoogleSheet
from models.pegasus_model import BbgDemoModel


class SendSMSViaVotoAPI(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		pass


	def post(self):
		self.response.out.write("You are about to send SMS Via Voto API")
		return



