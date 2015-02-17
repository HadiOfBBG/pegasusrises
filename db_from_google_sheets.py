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

class DbFromGoogleSheet(JinjaTemplating,db.Model):

	def get(self):
		JinjaTemplating.render_template_only(self,'aliu_test.html')


	# def post(self):
	# 	ModelName = "UserDefinedModel"
	# 	google_sheet = self.request.get('google_sheet')
	# 	self.response.out.write(google_sheet)

	# 	return
		#file  = '\n'.join(file.splitlines())
		#lines = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
		# self.response.out.write(lines)

		# col = lines[0] ;
		# db_columns = defaultdict(list)
		# count = 0;
		# for row in lines:
		#     if count == 0:
		#         count += 1
		#         # I do nothing
		#     else:
		#     #spliting row which is an array with one value so always row[0] on commas
		#         inner = row[0].split(",")
		#         name = inner[0]
		#         data_type = inner[1]
		#         label = inner[2]

		#         # putting the columns of the db into a list with the column name the key
		#         db_columns[name].append(('type', data_type))
		#         db_columns[name].append(('label', label))
		#         count += 1

		# #self.response.out.write(dict(db_columns))
		# modelName = 'DynamicModel'
		# self.create_db_model(modelName,db_columns)



	def read_google_sheet(self, google_sheet):

		# api = SpreadsheetAPI(GOOGLE_SPREADSHEET_USER, GOOGLE_SPREADSHEET_PASSWORD, GOOGLE_SPREADSHEET_SOURCE)
		api = SpreadsheetAPI()
		self.response.out.write("Writing A File")

		spreadsheets = api.list_spreadsheets()
		# sheet = spreadsheet.get_worksheet('tkZQWzwHEjKTWFFCAgw', 'od7')
		sheet = spreadsheet.get_worksheet(google_sheet)
		# sheet = file

		rows = sheet.get_rows()

		number_of_rows_in_sheet = len(rows)

		self.response.out.write("The number of rows in the file are: " +number_of_rows_in_sheet )

		return




	def create_db_model(self,ModelName,db_columns):

		db_columns_dictionary = dict(db_columns)

		# self.response.out.write(db_columns_dictionary)
		# return

		#this class extends the Expando Model so that am able to create database fields dynamically
		class BbgDemoModel(db.Expando):

			"""docstring for ModelName"""
			print("You just created a dynamic model class")
			# get tuples of field, labels
			for field, type_labels in db_columns_dictionary.iteritems():

				# column_name = field
				# self.response.out.write(column_name)
				# return

				# geting the first array that contains the word type for type of data with its associated value as loop through the various keys in the dictionary
				type_of_data_with_values = type_labels[0]

				# getting the the data type which is the value for the key 'type'
				type_of_data = type_of_data_with_values[1]

				# getting the second array which is the label for the current field with the key 'label' with the assocaited value
				data_label_with_values = type_labels[1]

				# getting the label which is the value for the key 'label'
				labels = data_label_with_values[1]

				#if else condtion to deterine data type
				if type_of_data == 'string':
					setattr(self, field, db.TextProperty())
				elif type_of_data == 'number':
					setattr(self, field, db.IntegerProperty())
				elif type_of_data == 'date':
					setattr(self, field, db.DateTimeProperty())
				else:
					setattr(self, field, db.TextProperty())

		self.response.out.write("Database created\n\n")

		age = 26

		birth_date = "16-04-1989"

		name = "Kanton Latifa"

		save_into_created_db = BbgDemoModel(age = age, birth_date = birth_date, name = name)
		save_into_created_db.put()
		self.response.out.write("Saved into database")
		return



