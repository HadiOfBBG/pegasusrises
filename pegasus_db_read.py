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
		self.queryPegasusDatabase()


	def post(self):
		# self.response.out.write("Print about to read data from pegassus")
		self.queryPegasusDatabase()
		# print "About to query DB"
		# return



	def queryPegasusDatabase(self, cache_retrieve_unavailable = True):
		data = {}
		key = 'recently_retrieved_submissions'
		survey_name = 'bbg_demo_survey'
		# Querying the dynamic properties model
		dynamic_model_and_properties = db.Query(DynamicModelsProperties)
		# getting the first match element of the dynmaic property model
		dynamic_model_and_properties = dynamic_model_and_properties.get()
		# getting the 'model_properties' property of the returned row
		model_properties = dynamic_model_and_properties.model_properties

		model_properties_in_json = json.dumps(model_properties)
		# self.response.out.write(model_properties_in_json)
		# return

		retrieve_questions_from_pegasus_db = db.Query(Questions)
		retrieve_questions_from_pegasus_db = list(retrieve_questions_from_pegasus_db)
		questions_list = self.gql_json_parser(retrieve_questions_from_pegasus_db)

		questions_list = json.dumps(questions_list)
		# return questions_list
		# self.response.out.write(questions_list)
		# return


		# retrieve_data_from_pegasus_db = db.Query(BbgDemoModel)
		retrieve_data_from_pegasus_db = BbgDemoModel.query()

		list_of_data_submissions = self.convert_ndb_expando_queries_into_json(model_properties,retrieve_data_from_pegasus_db)
		# return
		# self.response.out.write(list_of_data_submissions)

		# return

		# json_form_of_retrieved_data_submissions = json.dumps(list_of_data_submissions)
		# self.response.out.write(json_form_of_retrieved_data_submissions)
		# return

		data = {'questions_details': questions_list, 'survey_submissions' : list_of_data_submissions,'model_properties': model_properties_in_json}

		return data

		# data_returned_to_front_end = json.dumps(data)
		# self.response.out.write(data)

	# converting db.model queries into list for onward conversion into a json object
	def gql_json_parser(self,query_obj):
		result = []
		for entry in query_obj:
			result.append(dict([(p, unicode(getattr(entry, p))) for p in entry.properties()]))
		return result



	def convert_ndb_expando_queries_into_json(self,model_properties,expando_query_objects):

		dictionary_of_query_objects_properties_and_values = {}
		list_of_query_objects = []
		test = "name"

		for each_query_row in expando_query_objects:
			for attr, value in each_query_row.__dict__.iteritems():
				# self.response.out.write(attr)
				# self.response.out.write(value)

				dictionary_of_query_objects_properties_and_values[attr] = value
			    # print attr, value
		return dictionary_of_query_objects_properties_and_values;
			# list_of_query_objects.append(dictionary_of_query_objects_properties_and_values)
		# return list_of_query_objects

		# for each_query_row in expando_query_objects:
		# 	for each_property in model_properties:
		# 		dictionary_of_query_objects_properties_and_values[each_property] = each_query_row + "." +each_property
		# 	list_of_query_objects.append(dictionary_of_query_objects_properties_and_values)
		# return list_of_query_objects


