from google.appengine.ext import db

class UsersModel(db.Model):
    """docstring for AsciiDatabase"""
    username = db.StringProperty(required = True)
    email = db.StringProperty(required = True)
    profile_pic_url = db.StringProperty()
    access_token = db.StringProperty(required = True)
    last_login = db.DateTimeProperty()
    created_date = db.DateTimeProperty(auto_now_add = True)


    @staticmethod
	def addUsersModel(username, email, access_token, profile_pic_url):
		UsersModel = UsersModel(username = username, email = email, profile_pic_url = profile_pic_url, access_token = access_token,)
		UsersModel.put()
		return UsersModel


	@staticmethod
	def create_from_oauth(email, first_name, last_name, gender, picture, activated):
		UsersModel = UsersModel(email=email, first_name=first_name,last_name=last_name,picture=picture,
			activated=(activated == 'True'),gender=gender,acct_type='google')

		UsersModel.put()
		return UsersModel

	@staticmethod
	def updateUsersModel(cls, email, first_name, last_name, country, state):
		cls.email = email
		cls.first_name = first_name
		cls.last_name = last_name
		cls.country = country
		cls.state = state
		cls.put()

	@classmethod
	def verifyUsersModel(cls, email, password):
		status, UsersModel = Helper.verify_user(email, password, "UsersModel")

		if status:
			return UsersModel

	@classmethod
	def getUsersModel(cls, email):
		return cls.filter("email=", email).get()

	@classmethod
	def getAllUsersModels(cls):
		return cls.all()