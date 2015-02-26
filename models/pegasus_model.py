from google.appengine.ext import db
from google.appengine.ext import ndb

class BbgDemoModel(ndb.Expando):
	created_date_time = db.DateTimeProperty(auto_now_add = True)
	# data_submitted = db.DateTimeProperty()






