import csv
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating

class DbFromCsv(JinjaTemplating):

	def get(self):
		pass


	def post():
		pass

	def process_csv(self,blob_info):
		blob_reader = blobstore.BlobReader(blob_info.key())
		reader = csv.reader(blob_reader, delimiter=';')
		for row in reader:
			date, data, value = row
			entry = EntriesDB(date=date, data=data, value=int(value))
			entry.put()


class TestClass(JinjaTemplating):
	def get(self):
		JinjaTemplating.render_template_only(self,'aliu_test.html')


	def post(self):
		csv_title = self.request.get('csv_title')
		csv_file = self.request.get('csv_file')
		self.render(csv_file)
		# self.write(csv_title)


	def processCSV():
		pass










