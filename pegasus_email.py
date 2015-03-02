from google.appengine.api import mail
import webapp2
from google.appengine.api import users


class EmailHandler(webapp2.RequestHandler):
	def get(self):
		user = users.get_current_user()

		message = mail.EmailMessage(sender="comradehadi@gmail.com",
		                            subject="Pegasus Notification")

		message.to = "Hadi Mukaila <hadi@pegasusrises.com>"
		message.body = """
		Hadi Mukaila:

		Your example.com account has been approved.  You can now visit
		http://www.example.com/ and sign in using your Google Account to
		access new features.

		Please let us know if you have any questions.

		The example.com Team
		"""

		message.send()