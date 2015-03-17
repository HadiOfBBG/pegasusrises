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
import xmltodict
from models.save_raw_aggregate_data import SaveAggregateRawPostedData
from save_data_into_pegasus_db import SaveDataIntoPegasusDatabase
import datetime
import json
import os
import jinja2
from google.appengine.ext import ndb
import urllib
import logging
from models.save_raw_aggregate_data import SaveAggregateRawPostedData


class ReadDataFromAggragate(SaveDataIntoPegasusDatabase):

	"""docstring for ReadDataFromPegasus"""

	def get(self):

		# read_raw_data_posted_by_aggregate = ndb.Query(SaveAggregateRawPostedData)
		read_raw_data_posted_by_aggregate = SaveAggregateRawPostedData.query()


		if read_raw_data_posted_by_aggregate == None:
			self.response.out.write('No data currently saved')
		else:
			self.response.out.write('The biginining  of the loop over the data\n')
			for each_raw_data in read_raw_data_posted_by_aggregate:
				converting_data_to_json = json.dumps(each_raw_data.posted_json_data)
				self.response.out.write(converting_data_to_json)
			return





	def post(self):

		posted_data_by_aggregate = self.request.body
		self.processPostedByAggreateViaPublish(posted_data_by_aggregate)



	def processPostedByAggreateViaPublish(self,posted_data_by_aggregate):

		posted_data_by_aggregate = json.loads(posted_data_by_aggregate)
		logging.debug(posted_data_by_aggregate)

		form_id = posted_data_by_aggregate['formId']
		logging.debug("The Form ID: %s", str(form_id))

		the_real_inputed_data = posted_data_by_aggregate['data']
		data_object = posted_data_by_aggregate['data'][0]

		unique_submission_id = data_object['instanceID']
		logging.debug("Unique instance ID is %s", str(unique_submission_id))

		submission_already_saved = SaveAggregateRawPostedData.query(SaveAggregateRawPostedData.submission_unique_identity == unique_submission_id).get()

		if submission_already_saved is None:

			save_posted_data_by_aggregate = SaveAggregateRawPostedData()
			save_posted_data_by_aggregate.posted_json_data = posted_data_by_aggregate
			save_posted_data_by_aggregate.survey_responses = data_object
			save_posted_data_by_aggregate.form_id = form_id
			save_posted_data_by_aggregate.submission_unique_identity = unique_submission_id
			save_posted_data_by_aggregate.put()

			logging.info('Data from aggregate saved')

			return
		else:
			# if this submission has already been saved, do nothing or pass it without saving
			pass


