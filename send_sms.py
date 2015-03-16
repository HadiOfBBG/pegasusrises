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
from urllib2 import Request, urlopen, URLError
import urllib2
import urllib
import json
from google.appengine.api import urlfetch
from models.voto_subscribers_details import VotoSubscriberDetails
# import urllib2.request



class SendSMSViaVotoAPI(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		sender = 'Pegasusrises App'
		to = '+233207361609'
		content = 'Sending test sms on pegasus rises using sms gh api'

		self.sendSMS(sender,to,content)


	def post(self):

		# phone_numbers = json.loads(self.request.body)
		# for number in phone_numbers['recipients']:
		# 	self.response.out.write(number)
		# return


		send_from = 'Pegasusrises App'
		to = '+233207361609'
		content = 'Sending test sms on pegasus rises using sms gh api'
		self.sendSMS(send_from,to,content)



	# def add_subscribers_via_on_voto():
	# 	# bbg_demo_group_id_on_voto = 205947
	# 	request_parameters = {}
	# 	# user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
	# 	# headers = { 'User-Agent' : user_agent }
	# 	request_parameters['api_key'] = '9933226581419a3c2cab9df8a'
	# 	request_parameters['phone'] = '0277482171'
	# 	request_parameters['groups'] = 205947
	# 	url_values = urllib.urlencode(request_parameters)
	# 	url = 'https://go.votomobile.org/api/v1/subscribers'
	# 	# full_url = url + '?' + url_values

	# 	try:
	# 		request_sent = urllib2.Request(url, url_values)
	# 		response = urllib2.urlopen(request_sent)
	# 		# response = urllib2.urlopen(full_url)
	# 		data_returned = json.load(response)
	# 		# print data
	# 		# data_returned = response.read()
	# 		# print(data_returned)
	# 		self.response.out.write(data_returned['data'])
	# 		status_check =
	# 		if data_returned['data'] == 200:
	# 			pass
	# 		return
	# 	except URLError, e:
	# 		print(e)
	# 		self.response.out.write(e)
	# 		return


	def sendSMS(self,sender,to,content):
		request_parameters = {}
		request_parameters['From'] = sender
		request_parameters['To'] = to
		request_parameters['Content'] = content
		request_parameters['ClientId'] = 'meduvvbq'
		request_parameters['ClientSecret'] = 'qebkrdfm'

		url_values = urllib.urlencode(request_parameters)
		url = 'https://api.smsgh.com/v3/messages/send'
		full_url = url + '?' + url_values
		print (full_url)
		# return

		try:
			# request_sent = urllib2.Request(url, url_values)
			# response = urllib2.urlopen(request_sent)
			response = urllib2.urlopen(full_url)
			data_returned = json.load(response)
			# print data
			# data_returned = response.read()
			# print(data_returned)
			self.response.out.write(data_returned)

			return
		except URLError, e:
			print(e)
			self.response.out.write(e)
			return







