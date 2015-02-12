import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom

class CSVUploadHandler(JinjaTemplating):

    def get(self):
        JinjaTemplating.render_template_only(self,'hadi_test.html')


    def post(self):
        file = self.request.get('csv_import')
        file  = '\n'.join(file.splitlines())
        lines = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
        self.response.out.write("<data>")
        for eachRow in lines:
            #self.response.out.write(eachRow)
            if lines.line_number == 1:
                header = record
            else:
                xmlBody = ""
                visibility = false
                

        