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


class ReadDataFromAggragate(SaveDataIntoPegasusDatabase):

	"""docstring for ReadDataFromPegasus"""

	def get(self):
		# sample_json_object = ['foo', {'bar': ('baz', None, 1.0, 2)}]
		# save_posted_data_by_aggregate = SaveAggregateRawPostedData()
		# save_posted_data_by_aggregate.posted_json_data = sample_json_object
		# save_posted_data_by_aggregate.put()
		# return

		# read_raw_data_posted_by_aggregate = ndb.Query(SaveAggregateRawPostedData)
		read_raw_data_posted_by_aggregate = SaveAggregateRawPostedData.query()


		if read_raw_data_posted_by_aggregate == None:
			self.response.out.write('No data currently saved')
		else:
			data_list = {}
			self.response.out.write('The biginining  of the loop over the data\n')
			for each_raw_data in read_raw_data_posted_by_aggregate:
				# data_list
				# removing_quotes_around_data = urllib.unquote(each_raw_data.posted_json_data)
				# converting_data_to_json = json.dumps(removing_quotes_around_data)
				converting_data_to_json = json.dumps(each_raw_data.posted_json_data)
				# self.response.out.write('Data Below \n')
				self.response.out.write(converting_data_to_json)
			return
			# self.response.out.write('The end \n')





	def post(self):

		posted_data_by_aggregate = json.dumps(self.request.body)
		self.processPostedByAggreateViaPublish(posted_data_by_aggregate)



	def processPostedByAggreateViaPublish(self,posted_data_by_aggregate):

		logging.debug("The data posted: %s", str(posted_data_by_aggregate))

		posted_data_by_aggregate = urllib.unquote(posted_data_by_aggregate)

		for each_data_submitted in posted_data_by_aggregate:
			each_data_submitted = json.dumps(each_data_submitted)
			one_submission = each_data_submitted.data
			unique_submission_id = one_submission.instanceID
			logging.debug("Unique instance ID is %s", str(unique_submission_id))

			self.response.out.write(posted_data_by_aggregate)
			save_posted_data_by_aggregate = SaveAggregateRawPostedData()
			save_posted_data_by_aggregate.posted_json_data = posted_data_by_aggregate
			save_posted_data_by_aggregate.put()

			print('Data from aggregate saved')
			self.response.out.write('Data from aggregate saved')
			return

			# self.response.out.write(posted_data_by_aggregate)
			# save_posted_data_by_aggregate = SaveAggregateRawPostedData()
			# save_posted_data_by_aggregate.posted_json_data = posted_data_by_aggregate
			# save_posted_data_by_aggregate.put()


