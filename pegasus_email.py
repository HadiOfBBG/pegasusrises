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
		


	# @staticmethod
	def sendEmail(self):	
		
		user_list = ['hadi@pegasusrises.com','francis@pegasusrises.com','samuel@pegasusrises.com','aliu@pegasusrises.com']
		
		

		# platform_detected = wsgiref.util.request_uri(self.request.environ)
  #       onGAE_ = (platform_detected != None) and ('localhost:' not in platform_detected)
  #       if onGAE_:

		user = users.get_current_user()

		if user:
			for each_user in user_list:
				message = mail.EmailMessage(sender=user.email(),
			                            subject="Pegasus Survey Notification")

				message.to = each_user
				message.body = each_user
				message.body += """
				

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

	# else:
	# 	logging.error("local host")

		# if not onGAE_:

		# 	for each_user in user_list: 		
		# 		server_ = 'smtp.gmail.com'
		#         port_ = 587
		#         password_ = 'hadiBOSS123*'
		#         headers_ = ["From: " + "hadi@pegasusrise.com",
		#                          "To: " + ",".join(each_user),
		#                          "MIME-Version: 1.0",
		#                          "Content-Type: text/plain"]

  #               session = smtplib.SMTP(server_, port_)
  #               session.set_debuglevel(True)  # INCOMPLETE, for development
  #               session.ehlo()
  #               # session.starttls() # use encryption
  #               session.ehlo()
  #               session.login("hadi@pegasusrise.com", password_)
  #               headers = headers_ + ["Subject: " + "Pegasus Survey Notification"]
  #               headers = "\n".join(headers)
  #               session.sendmail(sender_, recipients_, headers + "\n\n" + body)
  #               session.quit()


                