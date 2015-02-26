import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from db_from_google_sheets import DbFromGoogleSheet
from models.pegasus_model import BbgDemoModel
from models.questions import Questions
import json


class ReadDataFromPegasus(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		pass


	def post(self):
		# self.response.out.write("Print about to read data from pegassus")
		self.queryPegasusDatabase()
		# print "About to query DB"
		# return



	def queryPegasusDatabase(self, cache_retrieve_unavailable = True):

		key = 'recently_retrieved_submissions'

		survey_name = 'bbg_demo_survey'

		retrieve_data_from_pegasus_db = memcache.get(key)

		# retrieve_questions_from_pegasus_db = db.Query(Questions)
		# retrieve_questions_from_pegasus_db.filter('survey_name =', survey_name)

		# GqlQuery interface constructs a query using a GQL query string
		# retrieve_questions_from_pegasus_db = db.GqlQuery("SELECT * FROM QuestionsDetails WHERE survey_name = :1", survey_name)

		retrieve_questions_from_pegasus_db = db.Query(Questions)
		# retrieve_questions_from_pegasus_db.filter('survey_name =', survey_name)

		for every_question_as_row in retrieve_questions_from_pegasus_db:
			self.response.out.write(every_question_as_row.question + "\n")
		return

		retrieve_questions_from_pegasus_db = list(retrieve_questions_from_pegasus_db)


		if retrieve_data_from_pegasus_db is None or cache_retrieve_unavailable:

			# Querying the pegasus db to get data submissions
			retrieve_data_from_pegasus_db = db.Query(BbgDemoModel)

			#to prevent as from querying over and over again we put the query results in a list for us to have permanent access
			retrieve_data_from_pegasus_db = list(retrieve_data_from_pegasus_db)

			# Putting the query results into cache
			memcache.set(key,retrieve_data_from_pegasus_db)

			retrieve_questions_from_pegasus_db

			# for every_data_as_row in retrieve_data_from_pegasus_db:
			# 	print(every_data_as_row.name)
			# 	self.response.out.write(every_data_as_row)
			# return

			data = {}
			data['data_submitted'] = retrieve_data_from_pegasus_db
			data['questions'] = retrieve_questions_from_pegasus_db
			json.dumps(data)
			return data

		else:
			print("From Cache")
			data = {}
			data['data_submitted'] = retrieve_data_from_pegasus_db
			data['questions'] = retrieve_questions_from_pegasus_db
			json.dumps(data)
			return data



