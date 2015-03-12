import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
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

class ReadQuestionsDetails(ReadDataFromPegasus):

    def get(self):
        retrieve_questions_from_pegasus_db = db.Query(Questions)
        retrieve_questions_from_pegasus_db = list(retrieve_questions_from_pegasus_db)
        questions_list = self.gql_json_parser(retrieve_questions_from_pegasus_db)
        data = {'questions_details': questions_list}
        data_returned_to_front_end = json.dumps(data)
        self.response.out.write(data_returned_to_front_end)

        return



    def post(self):

        retrieve_questions_from_pegasus_db = db.Query(Questions)
        retrieve_questions_from_pegasus_db = list(retrieve_questions_from_pegasus_db)
        questions_list = self.gql_json_parser(retrieve_questions_from_pegasus_db)
        data = {'questions_details': questions_list}
        data_returned_to_front_end = json.dumps(data)
        self.response.out.write(data_returned_to_front_end)

        return


