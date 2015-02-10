import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom

class DbFromCsv(JinjaTemplating,db.Model):

	def get(self):
		JinjaTemplating.render_template_only(self,'aliu_test.html')


	def post(self):
		ModelName = "UserDefinedModel"
		file = self.request.get('csv_import')
		file  = '\n'.join(file.splitlines())
		lines = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
		# self.response.out.write(lines)

		# col = lines[0] ;
		db_columns = defaultdict(list)
		count = 0;
		for row in lines:
			if count == 0:
				count += 1
				# I do nothing
			else:
			#spliting row which is an array with one value so always row[0] on commas
				inner = row[0].split(",")
				name = inner[0]
				type = inner[1]
				label = inner[2]

				# putting the columns of the db into a list with the column name the key
				#db_columns[name].append(('name', name))
				db_columns[name].append(('type', type))
				db_columns[name].append(('label', label))
				count += 1

		#self.response.out.write(dict(db_columns))
		self.create_db_model(ModelName,db_columns)

	def create_db_model(self,ModelName,db_columns):

		#self.response.out.write(dict(db_columns))
		#return
		db_columns_dictionary = dict(db_columns)

		class ModelName(db.Model):
			"""docstring for ModelName"""
			print("You just created a dynamic model class")
			# get tuples of term, courses
			for field, type_labels in db_columns_dictionary.iteritems():
				# getting the type of data with its value in a list
				type_of_data_with_values = type_labels[0]
				# the data type
				type_of_data = type_of_data_with_values[1]
				# getting the labels with their value in a list
				data_label_with_values = type_labels[1]
				# the label for the field
				labels = data_label_with_values[1]

				if type_of_data == 'string':
					print field
					field = db.TextProperty(required = True)
					print("Data type is a text.\n")
					print field
				elif type_of_data == 'number':
					field = db.IntegerProperty(required = True)
					print("Data type is an integer\n")
				elif type_of_data == 'date':
					field = db.DateTimeProperty()
					print("Data type is a date\n")
				else:
					print("This is a default data type\n")
		# self.response.out.write("Database created")
		name = "Gbeila Aliu Wahab"
		age = 25
		birth_date = "16-04-1989"
		save_into_created_db = ModelName(age = age, birth_date = birth_date,name = name)
		save_into_created_db.put()
		self.response.out.write("Saved into database")
		return



