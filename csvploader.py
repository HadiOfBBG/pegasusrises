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
<<<<<<< HEAD
from google.appengine.api import urlfetch
from poster.encode import multipart_encode, MultipartParam
import logging
from google.appengine.api import users
=======
from db_from_google_sheets import DbFromGoogleSheet
>>>>>>> 6b634a01f45445e55a83f7a47e8acdc980c88c3d

class CSVUploadHandler(DbFromGoogleSheet):

    def get(self):
        # self.response.out.write(pegasusFiles.PegasusFiles)
        JinjaTemplating.render_template_only(self,'hadi_test.html')


    def post(self):
        self.update("","1NNuNCTzzWiE-b4gJxyigY-nZPbfpnIReDipRmk-YOr4")
        # google_sheet = self.request.get('url')
        # logging.debug("value of my var is %s", 'okkkkkkkkkkkkkkkkkk')
        # sheet_name = self.request.get('name')
 
        # self.uploadFiles(google_sheet,sheet_name)
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
    def update(self,content, file_id):
        user = users.get_current_user()
        url = 'https://www.googleapis.com/upload/drive/v2/files/%s?uploadType=media' % file_id
        headers = {
            'Content-Type': 'text/plain',
            'Content-Length': str(len(content)),
            'Authorization': user.access_token
            }
        response = urlfetch.fetch(url, payload=content, method='PUT', headers=headers)
        # assert response.status_code == 200
        # return response.content 
        self.response.out.write(response.content)          


    def uploadFiles(self, google_sheet,sheet_name):
        file = pegasusFiles.PegasusFiles()
        file.name = sheet_name
        file.file = db.Blob(google_sheet)
        file.put()
<<<<<<< HEAD
        self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        better = db.get(str(file.key))
        self.response.out.write(better.name)
        # # self.getFile(file.key())
        # self.submitFile(file.key())
=======
        # self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        self.getFile(file.key())
>>>>>>> 6b634a01f45445e55a83f7a47e8acdc980c88c3d

    def getFile(self, key):
        file = db.get(key)
        if file is not None:
            self.response.headers['Content-Type'] = 'application/x-bittorrent'
<<<<<<< HEAD
            self.response.out.write(file.file)
            return file
        else:
            self.response.set_status(404)


    def getBlobFile(self, key):
        file = blobstore.getBlobFile(key)
        if file is not None:
            self.response.headers['Content-Type'] = 'application/x-bittorrent'
            self.response.out.write(file.file)
            return file
=======
            # self.response.out.write(file.file)
            # return file
            self.read_google_sheet(file)
>>>>>>> 6b634a01f45445e55a83f7a47e8acdc980c88c3d
        else:
            self.response.set_status(404)

            

    def submitFile(self,key):
        payload = {}
        files = self.getBlobFile(key)
        payload['file'] = MultipartParam('file', 
                                          name="file.name",
                                          filetype="file.type",
                                          fileobj="files.file")
        payload['name'] = file.name
        data = multipart_encode(payload)
        send_url = "http://23.21.114.69/xlsform"
        t = urlfetch.fetch(url=send_url, payload="".join(data), method=urlfetch.POST, headers=headers)
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.out.write(t.content)
        
