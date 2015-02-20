from google.appengine.ext import db
from google.appengine.api import urlfetch

class PegasusFiles(db.Model):
	name = db.StringProperty()
	file = db.BlobProperty()
	added = db.DateTimeProperty(auto_now_add=True) 
     
