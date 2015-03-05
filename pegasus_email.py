from google.appengine.api import mail
import webapp2
from google.appengine.api import users
import smtplib


class EmailHandler():
	@staticmethod
	def sendEmail():
		user_list = ['hadi@pegasusrises.com','francis@pegasusrises.com',
		'samuel@pegasusrises.com','aliu@pegasusrises.com']
		user = users.get_current_user()

		if user:
			for each_user in user_list:
				message = mail.EmailMessage(sender=user.nickname(),
			                            subject="Pegasus Survey Notification")

				message.to = each_user
				message.body = each_user
				message.body += """
				

				A survey has been created on the pegasusrises application. You have been
				invited by to participate in this on ongoing survey. Please follow the following 
				instructions to respond to the survey.
				1. Download ODK collect Android app from Google Play.
				2. Navigate to the platform settings and change the url to pegasusodk.appspot.com
				3. Press the request forms button to download the questions
				4. Once you have downloaded the questions, just respond to each question and submit
				the form afterwards.

				Please let us know if you have any questions.

				The Pegasusrises Team
				"""

				message.send()

		else:
			self.response.out.write("User not authenticated")