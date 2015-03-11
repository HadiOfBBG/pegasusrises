import webapp2
from main import MainHandler
from db_from_csv import DbFromCsv
from dashboard import DashboardHandler
from csvploader import CSVUploadHandler
from aggregate_db_read import ReadDataFromAggragate
from models import pegasusFiles
from questions_details_from_google_sheets import QuestionsDetailsFromGoogleSheet
from pegasus_db_read import ReadDataFromPegasus
from gcs_client import MainPage
from pegasus_email import EmailHandler
from send_sms import SendSMSViaVotoAPI
from save_data_into_pegasus_db import SaveDataIntoPegasusDatabase
from cron_read_data_from_aggregate import CronToReadDataFromAggregate
from read_questions_details import ReadQuestionsDetails



# define all routes here with their appropriate handlers
#Note: remember to import your module and the appropriate objects in the model or that you
# will use in the routes
routes = [
    (r'/', MainHandler),
    (r'/testbyaliu', DbFromCsv),
    (r'/post/csv', DbFromCsv),
    (r'/post/google/sheet', CSVUploadHandler),
    (r'/gcs', CSVUploadHandler),
    (r'/post/google/sheet/json', QuestionsDetailsFromGoogleSheet),
    (r'/google/sheet/json', QuestionsDetailsFromGoogleSheet),
    (r'/admin', DashboardHandler),
    (r'/upload', CSVUploadHandler),
    (r'/aggregate/database/read', ReadDataFromAggragate),
    (r'/gcs_old', MainPage),
    (r'/sendmail', EmailHandler),
    (r'/pegasus/database/read', ReadDataFromPegasus),
    (r'/send/sms/via/votoapi', SendSMSViaVotoAPI),
    (r'/save/data/on/pegasus', SaveDataIntoPegasusDatabase),
    (r'/cron/aggregate/database/read', CronToReadDataFromAggregate),
    (r'/questions/properties/read', ReadQuestionsDetails),
    (r'/data/submissions/read', ReadDataSubmissions),






]

config = {}

config['webapp2_extras.sessions'] = {
    'secret_key': 'something-very-very-secret',
}

app = webapp2.WSGIApplication(routes=routes, debug=True, config=config)

# app = webapp2.WSGIApplication([
# 	('/', MainHandler)
# ], debug=True)
