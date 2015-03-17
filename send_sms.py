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
from werkzeug.urls import URL
from base64 import b64encode
import requests
# import urllib2.request



class SendSMS(JinjaTemplating):

	"""docstring for ReadDataFromPegasus"""
	def get(self):
		sender = 'Pegasusrises'
		to = '+233243510497'
		# content = 'Sending test sms on pegasus rises using sms gh api'
		content = 'TestingApp'
		# self.sendSMS(sender,to,content)
		self.send_message_via_voto()



	def post(self):

		status = {}
		phone_numbers = json.loads(self.request.body)
		for number in phone_numbers['recipients']:
			save_subscriber = self.send_message_via_voto(number)
		if save_subscriber == 200:
			return "success"
		else:
			return "failed"



		# for number in phone_numbers['recipients']:
		# 	save_subscriber = self.add_subscribers_on_voto(number)
		# if save_subscriber == "success":
		# 	send_sms = self.send_message_via_voto()
		# 	if send_sms['status'] == 200:
		# 		status ={"status": "success", "message": "Message sent"}
		# 		self.response.out.write(json.dumps(status))
		# 		return
		# 	else:
		# 		status ={"status": "failed", "message": "Unable to send message"}
		# 		self.response.out.write(json.dumps(status))
		# 		return
		# else:
		# 	status ={"status": "failed", "message": "Unable to add phone numbers to list of participants, try again"}
		# 	self.response.out.write(json.dumps(status))
		# 	return



	def add_subscribers_on_voto(self,number):
		bbg_demo_group_id_on_voto = 205947
		request_parameters = {}
		request_parameters['api_key'] = '9933226581419a3c2cab9df8a'
		request_parameters['phone'] = number
		request_parameters['groups'] = bbg_demo_group_id_on_voto
		url_values = urllib.urlencode(request_parameters)
		url = 'https://go.votomobile.org/api/v1/subscribers'
		full_url = url + '?' + url_values
		try:
			# request_sent = urllib2.Request(url, url_values)
			response = urllib2.urlopen(request_sent)
			data_returned = json.load(response)
			self.response.out.write(data_returned['data'])
			if data_returned['status'] == 200:
				return "success"
			else:
				return "failed"

		except URLError, e:
			print(e)
			self.response.out.write(e)
			return




	def send_message_via_voto(self,number):
		message_id_on_voto = 202483
		bbg_demo_group_id_on_voto = 205947
		request_parameters = {}
		request_parameters['api_key'] = '9933226581419a3c2cab9df8a'
		request_parameters['message_id'] = message_id_on_voto
		# request_parameters['groups'] = bbg_demo_group_id_on_voto
		request_parameters['send_to_phones'] = number
		request_parameters['sms_sender_id'] = 'Pegasus'
		request_parameters['voice_sender_id'] = '+233207361609'
		request_parameters['schedule_type'] = 'now'
		url_values = urllib.urlencode(request_parameters)
		url = 'https://go.votomobile.org/api/v1/outgoing_calls'
		try:
			result = urlfetch.fetch(url=url,
			payload = url_values,
			method = urlfetch.POST,
			headers={'Content-Type': 'application/x-www-form-urlencoded'})

			# return returned_object = json.dumps(result.content)
			# return result.status_code
			return "success"


			# print("response status code : ", result.status_code)
			# print("response content : ", result.content)
			# print("response content : ", returned_object[0])
			# return "success"
		except URLError, e:
			print(e)
			self.response.out.write(e)
			return
























	# def geting_list_of_messages_on_voto(self):
	# 	message_id_on_voto = 202483
	# 	# bbg_demo_group_id_on_voto = 205947
	# 	request_parameters = {}
	# 	request_parameters['api_key'] = '9933226581419a3c2cab9df8a'
	# 	url_values = urllib.urlencode(request_parameters)
	# 	url = 'https://go.votomobile.org/api/v1/messages'

	# 	full_url = url + '?' + url_values
	# 	try:
	# 		response = urllib2.urlopen(full_url)
	# 		data_returned = json.load(response)
	# 		status_check = data_returned['status']
	# 		data = data_returned['data']
	# 		self.response.out.write(data)
	# 		return
	# 		for messgage in data:
	# 			self.response.out.write(messgage['id'])
	# 		# self.response.out.write(data)
	# 		# self.response.out.write(returned_object)
	# 		return
	# 		# status_check =
	# 		# if data_returned['data'] == 200:
	# 		# 	pass
	# 		return
	# 	except URLError, e:
	# 		print(e)
	# 		self.response.out.write(e)
	# 		return


	# def sendSMS(self,sender,to,content):

	# 	# ClientId = 'meduvvbq'
	# 	# ClientSecret = 'qebkrdfm'

	# 	auth_value = b'meduvvbq:qebkrdfmZZZZ'
	# 	user_and_pass = b64encode('meduvvbq:qebkrdfm').decode("ascii")

	# 	print("user pass is :", user_and_pass)
	# 	# return

	# 	headers = {
	# 		'Host' : 'api.smsgh.com',
	# 		'Accept' : 'application/json',
	# 		'Authorization' : 'Basic %s' % user_and_pass
	# 	}
	# 	# print(headers)
	# 	# return
	# 	values = {'From' : "+233200694823",
	# 	         'To' : "+233267050813",
	# 	         'Content' : "content" }
	# 	data = urllib.urlencode(values)
	# 	url = 'https://api.smsgh.com/v3/messages'

	# 	# MAGIC STARTS HERE

	# 	result = urlfetch.fetch(
	# 		url=url,
	# 	    payload=data,
	# 	    method=urlfetch.POST,
	# 	    headers=headers
	# 	)

	# 	# END OF MAGIC

	# 	print("response is : ", result.status_code, result.content)
	# 	return
	# 	# request_parameters = {}
	# 	# request_parameters['From'] = sender
	# 	# request_parameters['To'] = to
	# 	# request_parameters['Content'] = content
	# 	# request_parameters['ClientId'] = 'meduvvbq'
	# 	# request_parameters['ClientSecret'] = 'qebkrdfm'
	# 	# url_values = urllib.urlencode(request_parameters)
	# 	# base_url = 'https://api.smsgh.com/v3/messages/send'
	# 	# sender_object = urllib.urlencode({"From" : sender})
	# 	# content_object = urllib.urlencode({"Content" : content})
	# 	# print (sender_object)
	# 	# print (content_object)
	# 	# # return
	# 	# full_url = 'https://api.smsgh.com/v3/messages/send?'+ sender_object +'&To='+to+'&'+content_object+'&ClientId='+ClientId+'&ClientSecret='+ClientSecret
	# 	# # full_url = base_url + '?' + url_values
	# 	# print (full_url)
	# 	# # return

	# 	try:
	# 		# request_sent = urllib2.Request(full_url, headers)
	# 		# response = urllib2.urlopen(full_url)
	# 		# data_returned = json.load(response)
	# 		# self.response.out.write(data_returned)

	# 		req = urllib2.Request(url, data, headers)
	# 		response = urllib2.urlopen(req)
	# 		data_returned = json.load(response)
	# 		# the_page = response.read()
	# 		self.response.out.write(data_returned)


	# 		return
	# 	except URLError, e:
	# 		print(e)
	# 		self.response.out.write(e)
	# 		return







