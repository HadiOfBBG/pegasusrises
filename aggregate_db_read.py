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

class ReadDataFromPegasus(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""

	def get():
		print "Yet to use it"

	def post(self):
		self.getFormIdsGeneratedByAggregate()

	#this function get the ID of the form to retieve data from and also calls the function that requst for the data
	def getFormIdsGeneratedByAggregate(self):
		#Here am suppose to query and get all form IDs so a query(Loop through) to make request to get IDS of data submitted on that form
		#For Pegasus A, it is moslty likely going to be one form
		self.response.out.write('You are here to read data right?')


		form_id = 'build_Software-Engagement-Test_1420717947'
		num_of_form_ids = '1000'

		self.getIdsOfDataSubmissions(form_id, num_of_form_ids)


	def getIdsOfDataSubmissions(self, form_id,num_of_form_ids):

		request = Request('https://pegasusodk.appspot.com/view/submissionList?formId=' + form_id + '&numEntries=' + num_of_form_ids)
		try:
			response = urlopen(request)
			data_submissions = response.read()
			#print kittens[559:1000]
			self.response.out.write(data_submissions)

		except URLError, e:
			self.response.out.write('No kittez. Got an error code:', e)
		

