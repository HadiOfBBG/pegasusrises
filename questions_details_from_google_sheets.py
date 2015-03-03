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
import re
from models.pegasus_model import BbgDemoModel
from models.dynamic_model_properties import DynamicModelsProperties


class QuestionsDetailsFromGoogleSheet(JinjaTemplating):



    def get(self):
        JinjaTemplating.render_template_only(self, 'aliu_test.html')




    def post(self):
        posted_json = json.loads(self.request.body)
        # posted_json = self.request.body
        survey_meta_details = posted_json['settings']['column_names']
        survey_details = posted_json['settings']['elements']
        survey_name = survey_details[0]['form_title']
        # self.response.out.write(survey_name + '\n')
        # return



        survey_xls_columns = posted_json['survey']['column_names']
        survey_questions_in_xls = posted_json['survey']['elements']

        choices_xls_columns = posted_json['choices']['column_names']
        possible_choices_xls = posted_json['choices']['elements']


        # these are use to get the various columns in surveys worksheet as array indexes
        type_of_data = 0
        name_of_db_field = 1
        question_text = 2

        # these are use to get the various columns in choices worksheet as array indexes
        option_list_name = 0
        option_value = 1
        option_label = 2

        # This enable me to save the question details into the question details model
        possible_answers_values = ''
        possible_answers_labels = ''

        for question in survey_questions_in_xls:

            question_data_type = question[survey_xls_columns[type_of_data]]
            question_db_field_name = question[survey_xls_columns[name_of_db_field]]
            question_text_to_display= question[survey_xls_columns[question_text]]

            # searching to see whether the word 'select' exist in the question_data_type
            search_to_see_select = re.search( r'select', question_data_type)

            if search_to_see_select:

                # setting a database field
                # setattr(self, question_db_field_name, db.StringProperty())

                question_type_split = question_data_type.split()

                get_list_name_in_survey = question_type_split[1]

                # self.response.out.write('We found the word "select" in: ' + question_data_type + '\n')
                # self.response.out.write(question_data_type + '\n')
                # self.response.out.write(question_db_field_name + '\n')
                # self.response.out.write(question_text_to_display + '\n')

                for answer_option in possible_choices_xls:

                    answers_for_a_question_listname = answer_option[choices_xls_columns[option_list_name]]
                    answer_value = answer_option[choices_xls_columns[option_value]]
                    answer_text_to_display = answer_option[choices_xls_columns[option_label]]

                    # comparing the listname in the choices worksheet to the splited data type position one which gives a list name
                    if answers_for_a_question_listname == get_list_name_in_survey:

                        possible_answers_values += answer_value + ','

                        possible_answers_labels += answer_text_to_display + ','

                # self.response.out.write('Possible Answers Values: ' + possible_answers_values + '\n')
                # self.response.out.write('Possible Answers Labels: ' + possible_answers_labels + '\n')

                # GqlQuery interface constructs a query using a GQL query string
                finding_if_question_has_been_saved = db.GqlQuery("SELECT * FROM QuestionsDetails " +
                                "WHERE survey_name = :1 AND question_db_field_name <= :2 ", survey_name,question_db_field_name)

                # if question has not been saved, do nothing
                if finding_if_question_has_been_saved is not None:
                    # saving the question details into the question details table
                    question_type = 'close_ended'
                    insert_a_new_question_details = Questions(survey_name = survey_name, question = question_text_to_display, question_field = question_db_field_name, possible_answers = possible_answers_values, possible_answers_labels = possible_answers_labels, question_type = question_type)
                    insert_a_new_question_details.put()

                    # save the newly inserted question into tracking question details table so we know which questions details have been saved
                    insert_a_new_tracking_question_details = QuestionsDetails(survey_name = survey_name, question_db_field_name = question_db_field_name)
                    insert_a_new_tracking_question_details.put()

                    # resetting the variables
                    possible_answers_values = ''
                    possible_answers_labels = ''

                else:

                    print("Question Already Saved")
                    # if question has been saved
                    self.response.out.write('Field Already saved in db')

            else:

                # self.response.out.write(question_data_type + '\n')
                # self.response.out.write(question_db_field_name + '\n')
                # self.response.out.write(question_text_to_display + '\n')
                # GqlQuery interface constructs a query using a GQL query string
                finding_if_question_has_been_saved = db.GqlQuery("SELECT * FROM QuestionsDetails " +
                                "WHERE survey_name = :1 AND question_db_field_name <= :2 ", survey_name,question_db_field_name)

                # if question has not been saved save it
                if finding_if_question_has_been_saved is not None:
                    # Saving question details into the questions details table
                    question_type = 'open_ended'
                    # insert_a_new_question_deatils = Questions(question = question_text_to_display, question_field = question_db_field_name, possible_answers = possible_answers_values, possible_answers_labels = possible_answers_labels, question_type = question_type)
                    insert_a_new_question_details = Questions(survey_name = survey_name, question = question_text_to_display, question_field = question_db_field_name, possible_answers = 'No possible answers',question_type = question_type)
                    insert_a_new_question_details.put()

                    # save the newly inserted question into tracking question details table so we know which questions details have been saved
                    insert_a_new_tracking_question_details = QuestionsDetails(survey_name = survey_name, question_db_field_name = question_db_field_name)
                    insert_a_new_tracking_question_details.put()

                else:
                    # if question has been saved
                    pass



        self.response.out.write('Questions structure saved on your pegasus server\n')



