import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from xml.dom import minidom
from models import pegasusFiles
from db_from_google_sheets import DbFromGoogleSheet

class CSVUploadHandler(DbFromGoogleSheet):

    def get(self):
        # self.response.out.write(pegasusFiles.PegasusFiles)
        JinjaTemplating.render_template_only(self,'hadi_test.html')


    def post(self):
        google_sheet = self.request.get('url')
 
        self.uploadFiles(google_sheet)
        # file = self.request.get('csv_import')
        # file  = '\n'.join(file.splitlines())
        # lines = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
        # self.response.out.write("<data>")
        # for eachRow in lines:
        #     #self.response.out.write(eachRow)
        #     if lines.line_number == 1:
        #         header = record
        #     else:
        #         xmlBody = ""
        #         visibility = false
                

    def uploadFiles(self, google_sheet):
        file = pegasusFiles.PegasusFiles()
        file.file = db.Blob(google_sheet)
        file.put()
        # self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        self.getFile(file.key())

    def getFile(self, key):
        file = db.get(key)
        if file is not None:
            self.response.headers['Content-Type'] = 'application/x-bittorrent'
            # self.response.out.write(file.file)
            # return file
            self.read_google_sheet(file)
        else:
            self.response.set_status(404)

            

    def submitFile(self,key):
        file = self.getFile(key)
        
