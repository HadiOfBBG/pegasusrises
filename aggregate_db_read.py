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
		# count = 1
		# for each_raw_data in read_raw_data_posted_by_aggregate:
		# 	if count == 1 and each_raw_data == None:
		# 		self.response.out.write('No data \n')
		# 	else:
		# 		self.response.out.write('Data Below \n')
		# 		self.response.out.write(each_raw_data)

		if read_raw_data_posted_by_aggregate == None:
			self.response.out.write('No data currently saved')
		else:
			for each_raw_data in read_raw_data_posted_by_aggregate:
				self.response.out.write('Data Below \n')
				self.response.out.write("\n")
				self.response.out.write(each_raw_data.posted_json_data)




	def post(self):

		posted_data_by_aggregate = json.dumps(self.request.body)
		self.processPostedByAggreateViaPublish(posted_data_by_aggregate)



	def processPostedByAggreateViaPublish(self,posted_data_by_aggregate):

		self.response.out.write(posted_data_by_aggregate)
		save_posted_data_by_aggregate = SaveAggregateRawPostedData()
		save_posted_data_by_aggregate.posted_json_data = posted_data_by_aggregate
		save_posted_data_by_aggregate.put()

		print('Data from aggregate saved')
		self.response.out.write('Data from aggregate saved')
		return

		responses = posted_json_data.data


