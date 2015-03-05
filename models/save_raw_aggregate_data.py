from google.appengine.ext import ndb
from google.appengine.api import urlfetch

class SaveAggregateRawPostedData(ndb.Model):
  """NDB model to temporarily store the POST request."""
  posted_json_data = ndb.JsonProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)

