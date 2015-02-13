import webapp2
from main import MainHandler
from dbcsv import DbFromCsv
from dashboard import DashboardHandler
from csvploader import CSVUploadHandler
from aggregate_db_read import ReadDataFromPegasus
from db_from_google_sheets import DbFromGoogleSheet

# define all routes here with their appropriate handlers
#Note: remember to import your module and the appropriate objects in the model or that you
# will use in the routes
routes = [
    (r'/', MainHandler),
    (r'/testbyaliu', DbFromCsv),
    (r'/postcsv', DbFromCsv),
    (r'/post/google/sheet', DbFromGoogleSheet),
    (r'/admin', DashboardHandler),
    (r'/upload', CSVUploadHandler),
    (r'/read/data/from/aggregate', ReadDataFromPegasus),

]

config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'something-very-very-secret',
}

app = webapp2.WSGIApplication(routes=routes, debug=True, config=config)

# app = webapp2.WSGIApplication([
# 	('/', MainHandler)
# ], debug=True)
