from google.appengine.api import mail
import webapp2
import os
from google.appengine.api import users
import smtplib
import logging
from jinja_template import JinjaTemplating
import wsgiref
import json


class EmailHandler(JinjaTemplating):
	def post(self):
		email_details = json.loads(self.request.body)
		object_details = email_details['recipients']
		object_details_test = email_details['from']
		logging.error(object_details)		
		platform_detected = wsgiref.util.request_uri(self.request.environ)
		onGAE_ = (platform_detected != None) and ('localhost:' not in platform_detected)
		if onGAE_:
			self.sendEmail(object_details)

		else:
			email_result = {
            "status":"failed",
            "content":"Email sending in pegasusrises is done only on a hosted version of Pegasus."
            }
			return self.response.out.write(json.dumps(email_result))
		



	def sendEmail(self,email_list):	
		
		user_list = ['henrik@pegasusrises.com','hadi@pegasusrises.com','francis@pegasusrises.com','samuel@pegasusrises.com','aliu@pegasusrises.com']
		
		


		user = users.get_current_user()

		if user:

			try:
			
				message = mail.EmailMessage(sender=user.email(),
										subject="Pegasus Survey Notification")

				message.to = email_list
				
				message.body = """
				

				A survey has been created on the pegasusrises application. You have been
				invited by to participate in this ongoing survey. Please follow the following 
				instructions to respond to the survey.
				1. Download ODK collect Android app from Google Play if you have not.
				2. Navigate to the platform settings and change the url to pegasusodk.appspot.com if you have not
				3. Press the request forms button to download the questions
				4. Once you have downloaded the questions, just respond to each question and submit
				the form afterwards.

				Please let us know if you have any questions.

				The Pegasusrises Team
				"""

				message.send()
				email_result = {
            "status":"failed",
            "content":"success"
            }
				return self.response.out.write(json.dumps(email_result))

			except Exception,e:
				email_result = {
            "status":"failed",
            "content":"failed"
            }
				return self.response.out.write(json.dumps(email_result))

		else:
			email_result = {
            "status":"failed",
            "content":"User not authenticated"
            }
			return self.response.out.write(json.dumps(email_result))

			# logging.error("User not authenticated")

	

				