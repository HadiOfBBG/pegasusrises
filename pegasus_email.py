from google.appengine.api import mail
import webapp2
import os
from google.appengine.api import users
import smtplib
import logging
from jinja_template import JinjaTemplating
import wsgiref


class EmailHandler(JinjaTemplating):
	def get(self):
		platform_detected = wsgiref.util.request_uri(self.request.environ)
		onGAE_ = (platform_detected != None) and ('localhost:' not in platform_detected)
		if onGAE_:
			self.sendEmail()

		else:
			self.response.out.write("Email sending in pegasusrises is done only on a hosted version of Pegasus.")
		



	def sendEmail(self):	
		
		user_list = ['henrik@pegasusrises.com','hadi@pegasusrises.com','francis@pegasusrises.com','samuel@pegasusrises.com','aliu@pegasusrises.com']
		
		


		user = users.get_current_user()

		if user:
			
			message = mail.EmailMessage(sender=user.email(),
		                            subject="Pegasus Survey Notification")

			message.to = user_list
			
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

		else:

			logging.error("User not authenticated")

	

                