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

class CronToReadDataFromAggregate(JinjaTemplating):


    def get(self):
        self.response.out.write("Cron way of reading pegasus database")
        return
        # self.getFormIdsGeneratedByAggregate()


    def post(self):
        self.getFormIdsGeneratedByAggregate()




    #this function get the ID of the form to retieve data from and also calls the function that requst for the data
    def getFormIdsGeneratedByAggregate(self):
        #Here am suppose to query and get all form IDs so a query(Loop through) to make request to get IDS of data submitted on that form
        #For Pegasus A, it is moslty likely going to be one form
        # self.response.out.write('You are here to read data right?')
        # return

        form_id = 'pegasusDemoQuestionnaire'
        num_of_form_ids = '1000'
        self.getIdsOfDataSubmissions(form_id, num_of_form_ids)
        return



    def getIdsOfDataSubmissions(self, form_id,num_of_form_ids):
        # uuid:64802bb2-383c-476d-a7aa-95db88bfb734
        request = Request('https://pegasusodk.appspot.com/view/submissionList?formId=' + form_id + '&numEntries=' + num_of_form_ids)

        try:
            response = urlopen(request)
            data_submissions = response.read()
            converting_form_ids_in_xml_to_json = xmltodict.parse(data_submissions)
            list_of_submissions_ids = converting_form_ids_in_xml_to_json['idChunk']['idList']['id']
            # self.response.out.write(converting_form_ids_in_xml_to_json['idChunk']['idList']['id'])
            # return
            for submission_id in list_of_submissions_ids:
                self.response.out.write(submission_id)
                self.response.out.write("\n")
                # return
                # self.getDataSubmittedUsingSubmissionID(form_id, submission_id)
            return
        except URLError, e:
            self.response.out.write('No submissions IDs retrieved. Got an error code:')


    def getDataSubmittedUsingSubmissionID(self,form_id,submission_id):

        request = Request('https://pegasusodk.appspot.com/formid[@version=null and @uiVersion=null]/topElement[@key=idvalue]')

        try:
            response = urlopen(request)
            data_associated_with_submission_id = response.read()
            json_form_of_data_submitted = xmltodict.parse(data_associated_with_submission_id)
            self.response.out.write(json_form_of_data_submitted)

        except URLError, e:
            self.response.out.write('No submissions retrieved. Got an error code:')




