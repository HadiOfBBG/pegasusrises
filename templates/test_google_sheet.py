import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom
from google_spreadsheet import api
from google_spreadsheet.api import SpreadsheetAPI
from models.questions import Questions
from models.track_questions_details import QuestionsDetails
import json
import models.testmodel import TestBbgDemoModel


class TestDbFromGoogleSheet(JinjaTemplating, TestBbgDemoModel):



    def get(self):
        JinjaTemplating.render_template_only(self, 'aliu_test.html')


    def post(self):

        survey_name = 'bbg_demo_survey'

        posted_json = json.loads(self.request.body)
        # posted_json = self.request.body
        survey_xls_columns = posted_json['survey']['column_names']
        survey_questions_in_xls = posted_json['survey']['elements']

        choices_xls_columns = posted_json['choices']['column_names']
        possible_choices_xls = posted_json['choices']['elements']


        self.set_model_attributes(self, survey_name,survey_xls_columns,survey_questions_in_xls,choices_xls_columns,possible_choices_xls)


