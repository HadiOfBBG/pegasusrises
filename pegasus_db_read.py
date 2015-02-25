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
from db_from_google_sheets import DbFromGoogleSheet
from models.pegasus_model import BbgDemoModel


class ReadDataFromPegasus(JinjaTemplating, BbgDemoModel):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		JinjaTemplating.render_template_only(self, 'aliu_test.html')


	def post(self):
		self.queryPegasusDatabase()



	def queryPegasusDatabase(self, cache_retrieve_unavailable = True):

		print "About to query DB"

		key = 'recently_retrieved_submissions'

		retrieve_data_from_pegasus_db = memcache.get(key)

		if retrieve_data_from_pegasus_db is None or cache_retrieve_unavailable:

			# Querying the pegasus db command
			# retrieve_data_from_pegasus_db = db.GqlQuery("SELECT * FROM BbgDemoModel ORDER BY created_date DESC")
			retrieve_data_from_pegasus_db = db.GqlQuery("SELECT * FROM BbgDemoModel")

			#to prevent as from querying over and over again we put the query results in a list for us to have permanent access
			retrieve_data_from_pegasus_db = list(retrieve_data_from_pegasus_db)

			# Putting the query results into cache
			memcache.set(key,retrieve_data_from_pegasus_db)
			print("From Query")
			print(retrieve_data_from_pegasus_db)

			for every_data_as_row in retrieve_data_from_pegasus_db:
				self.response.out.write(every_data_as_row)

			self.response.out.write(retrieve_data_from_pegasus_db)
			return

		else:
			print("From Cache")
			print(retrieve_data_from_pegasus_db)

			self.response.out.write(retrieve_data_from_pegasus_db)
			return



