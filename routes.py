import webapp2
from main import MainHandler
from db_from_csv import DbFromCsv
from dashboard import DashboardHandler
from csvploader import CSVUploadHandler
<<<<<<< HEAD
from ServeBlobFile import ServeHandler
from aggregate_db_read import ReadDataFromPegasus
from models import pegasusFiles
from db_from_google_sheets import DbFromGoogleSheet
from gcs_client import MainPage
=======
from aggregate_db_read import ReadDataFromAggragate
from models import pegasusFiles
from db_from_google_sheets import DbFromGoogleSheet
from pegasus_db_read import ReadDataFromPegasus
>>>>>>> d403072b36f940d4df18e034555b73513f6f1562

# define all routes here with their appropriate handlers
#Note: remember to import your module and the appropriate objects in the model or that you
# will use in the routes
routes = [
    (r'/', MainHandler),
    (r'/testbyaliu', DbFromCsv),
    (r'/post/csv', DbFromCsv),
<<<<<<< HEAD
    (r'/post/google/sheet', CSVUploadHandler),
    (r'/gcs', CSVUploadHandler),
<<<<<<< HEAD
=======
>>>>>>> d403072b36f940d4df18e034555b73513f6f1562
=======
>>>>>>> 414d7bae8f89379a86e1569048ee51ccdf61ebc7
    (r'/post/google/sheet/json', DbFromGoogleSheet),
    (r'/google/sheet/json', DbFromGoogleSheet),
    (r'/admin', DashboardHandler),
    (r'/upload', CSVUploadHandler),
<<<<<<< HEAD
    (r'/read/data/from/aggregate', ReadDataFromPegasus),
    (r'/serve/([^/]+)?', ServeHandler),
    (r'/gcs_old', MainPage),
=======
    (r'/read/data/from/aggregate', ReadDataFromAggragate),
    (r'/read/data/from/pegasus', ReadDataFromPegasus),

>>>>>>> d403072b36f940d4df18e034555b73513f6f1562

]

config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'something-very-very-secret',
}

app = webapp2.WSGIApplication(routes=routes, debug=True, config=config)

# app = webapp2.WSGIApplication([
# 	('/', MainHandler)
# ], debug=True)
