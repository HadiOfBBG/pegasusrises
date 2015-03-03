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
from xmltodict import *

class ReadDataFromAggragate(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""

	def get():
		print "Yet to use it"

	def post(self):
		self.getFormIdsGeneratedByAggregate()

	#this function get the ID of the form to retieve data from and also calls the function that requst for the data
	def getFormIdsGeneratedByAggregate(self):
		#Here am suppose to query and get all form IDs so a query(Loop through) to make request to get IDS of data submitted on that form
		#For Pegasus A, it is moslty likely going to be one form
		# self.response.out.write('You are here to read data right?')
		# return
		form_id = 'pegasusDemoQuestionnaire'

		num_of_form_ids = '1000'

		self.getIdsOfDataSubmissions(form_id, num_of_form_ids)


	def getIdsOfDataSubmissions(self, form_id,num_of_form_ids):

		request = Request('https://pegasusodk.appspot.com/view/submissionList?formId=' + form_id + '&numEntries=' + num_of_form_ids)

		try:
			response = urlopen(request)
			data_submissions = response.read()
			#data_submissions_id = data_submissions[' uuid']
			# Looping through to get data of each submission using submission_id
			# for submission_id in data_submissions_id:
			# 	getDataSubmittedUsingSubmissionID(form_id,submission_id)
			self.response.out.write(data_submissions)

		except URLError, e:
			self.response.out.write('No submissions retrived. Got an error code:', e)


	def getDataSubmittedUsingSubmissionID(self,form_id,submission_id):

		request = Request('https://pegasusodk.appspot.com/formid[@version=null and @uiVersion=null]/topElement[@key=idvalue]')

		try:
			response = urlopen(request)
			data_assocuated_with_submission_id = response.read()
			self.response.out.write(data_submissions)

		except URLError, e:
			self.response.out.write('No submissions retrived. Got an error code:', e)


