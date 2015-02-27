import webapp2
from main import MainHandler
from db_from_csv import DbFromCsv
from dashboard import DashboardHandler
from csvploader import CSVUploadHandler
from ServeBlobFile import ServeHandler
from aggregate_db_read import ReadDataFromAggragate
from models import pegasusFiles
from db_from_google_sheets import DbFromGoogleSheet
from pegasus_db_read import ReadDataFromPegasus
from gcs_client import MainPage
from pegasus_email import EmailHandler


# define all routes here with their appropriate handlers
#Note: remember to import your module and the appropriate objects in the model or that you
# will use in the routes
routes = [
    (r'/', MainHandler),
    (r'/testbyaliu', DbFromCsv),
    (r'/post/csv', DbFromCsv),
    (r'/post/google/sheet', CSVUploadHandler),
    (r'/gcs', CSVUploadHandler),
    (r'/post/google/sheet/json', DbFromGoogleSheet),
    (r'/google/sheet/json', DbFromGoogleSheet),
    (r'/admin', DashboardHandler),
    (r'/upload', CSVUploadHandler),
    (r'/read/data/from/aggregate', ReadDataFromPegasus),
    (r'/serve/([^/]+)?', ServeHandler),
    (r'/gcs_old', MainPage),
    (r'/read/data/from/aggregate', ReadDataFromAggragate),
    (r'/sendmail', EmailHandler),


]

config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'something-very-very-secret',
}

app = webapp2.WSGIApplication(routes=routes, debug=True, config=config)

# app = webapp2.WSGIApplication([
# 	('/', MainHandler)
# ], debug=True)
