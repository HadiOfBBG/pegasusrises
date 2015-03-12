import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.ext import ndb
from google.appengine.api import memcache
from questions_details_from_google_sheets import QuestionsDetailsFromGoogleSheet
from models.pegasus_model import BbgDemoModel
from models.questions import Questions
from save_data_into_pegasus_db import SaveDataIntoPegasusDatabase
from urllib2 import Request, urlopen, URLError
import json
import ast
from xmltodict import *
import xmltodict
from models.questions import Questions
from pegasus_db_read import ReadDataFromPegasus
from models.save_raw_aggregate_data import SaveAggregateRawPostedData
from models.list_of_surveys import ListOfSurveys


class UserSurveysRead(ReadDataFromPegasus):

    def get(self):
        self.querying_list_of_user_surveys()





    def post(self):
        self.querying_list_of_user_surveys()


    def querying_list_of_user_surveys(self):

        retrieve_user_surveys = db.Query(ListOfSurveys)
        if_survey_exist = retrieve_user_surveys.get()
        retrieve_user_surveys = list(retrieve_user_surveys)

        if if_survey_exist is None:
            surveys = 'No surveys set up'
            data = {'surveys': surveys}
            data_returned_to_front_end = json.dumps(data)
            self.response.out.write(data_returned_to_front_end)
            return
        else:
            surveys_list = self.gql_json_parser(retrieve_user_surveys)
            data = {'surveys': surveys}
            data_returned_to_front_end = json.dumps(data)
            self.response.out.write(data_returned_to_front_end)
            return




