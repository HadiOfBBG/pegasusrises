from google.appengine.ext import db

class BbgDemoModel(db.Expando):
	created_date_time = db.DateTimeProperty(auto_now_add = True)
	# created_date_time = db.DateTimeProperty()
	# data_submitted = db.DateTimeProperty()






