import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from questions_details_from_google_sheets import QuestionsDetailsFromGoogleSheet
from models.pegasus_model import BbgDemoModel
from models.questions import Questions
from save_data_into_pegasus_db import SaveDataIntoPegasusDatabase
from models.dynamic_model_properties import DynamicModelsProperties
import json
import ast



class ReadDataFromPegasus(SaveDataIntoPegasusDatabase):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		pass


	def post(self):
		# self.response.out.write("Print about to read data from pegassus")
		self.queryPegasusDatabase()
		# print "About to query DB"
		# return



	def queryPegasusDatabase(self, cache_retrieve_unavailable = True):

		# Querying the dynamic properties model
		dynamic_model_and_properties = db.Query(DynamicModelsProperties)
		# getting the first match element of the dynmaic property model
		dynamic_model_and_properties = dynamic_model_and_properties.get()
		# getting the 'model_properties' property of the returned row
		model_properties = dynamic_model_and_properties.model_properties

		self.response.out.write(model_properties)
		return
		model_properties = ast.literal_eval(model_properties)
		print(model_properties)

		# for key, value in model_properties.iteritems():
		# 	self.response.out.write(key + "Corresponds to value " + value)
		# 	print key
		# return
		# model_properties = eval(dynamic_model_and_properties.model_properties)
		# self.response.out.write(model_properties)
		return

		key = 'recently_retrieved_submissions'

		survey_name = 'bbg_demo_survey'

		retrieve_data_from_pegasus_db = memcache.get(key)

		retrieve_questions_from_pegasus_db = db.Query(Questions)
		retrieve_questions_from_pegasus_db = list(retrieve_questions_from_pegasus_db)

		questions_list = []
		for every_question_as_row in retrieve_questions_from_pegasus_db:
				questions_list.append({'possible_answers': every_question_as_row.possible_answers,'possible_answers_labels': every_question_as_row.possible_answers_labels,'question': every_question_as_row.question,'question_field': every_question_as_row.question_field,'question_type': every_question_as_row.question_type,'survey_name': every_question_as_row.survey_name})

		questions_list = json.dumps(questions_list)
		self.response.out.write(questions_list)
		return

		if retrieve_data_from_pegasus_db is None or cache_retrieve_unavailable is True:

			# Querying the pegasus db to get data submissions
			retrieve_data_from_pegasus_db = db.Query(BbgDemoModel)

			#to prevent as from querying over and over again we put the query results in a list for us to have permanent access
			retrieve_data_from_pegasus_db = list(retrieve_data_from_pegasus_db)
			# Putting the query results into cache
			memcache.set(key,retrieve_data_from_pegasus_db)

			data_submissions_dictionary = []
			for every_submission_as_row in retrieve_data_from_pegasus_db:
					data_submissions_dictionary.append({'possible_answers': every_question_as_row.possible_answers,'possible_answers_labels': every_question_as_row.possible_answers_labels,'question': every_question_as_row.question,'question_field': every_question_as_row.question_field,'question_type': every_question_as_row.question_type,'survey_name': every_question_as_row.survey_name})


			return

		else:
			print("From Cache")
			data = {}
			data['data_submitted'] = retrieve_data_from_pegasus_db
			data['questions'] = retrieve_questions_from_pegasus_db
			json.dumps(data)
			return data



