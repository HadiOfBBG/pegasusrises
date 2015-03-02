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
from google.appengine.api import urlfetch
from poster.encode import multipart_encode, MultipartParam
import logging
from google.appengine.api import users
import json
from google.appengine.api import files
import cloudstorage as gcs
from google.appengine.api import app_identity
import webapp2
# import gcs_client as gcs
import time

retry_params = gcs.RetryParams(initial_delay=0.2,
                                          max_delay=5.0,
                                          backoff_factor=2,
                                          max_retry_period=15)

gcs.set_default_retry_params(retry_params)
xframe = 'http://23.21.114.69/xlsform/'
urlfetch.set_default_fetch_deadline(60)

#retry_params = gcs.RetryParams(initial_delay=0.2,
#                                          max_delay=5.0,
#                                          backoff_factor=2,
#                                          max_retry_period=15)
#
#gcs.set_default_retry_params(retry_params)
#xframe = 'http://23.21.114.69/xlsform/'
#urlfetch.set_default_fetch_deadline(60)


class CSVUploadHandler(JinjaTemplating,blobstore_handlers.BlobstoreUploadHandler,blobstore_handlers.BlobstoreDownloadHandler):

    def get(self):
        # self.response.out.write(pegasusFiles.PegasusFiles)
        JinjaTemplating.render_template_only(self,'hadi_test.html')


    def post(self):
        content_from_server = json.loads(self.request.body)
        url = content_from_server['downloadUrl']
        self.response.out.write('oooooooooooooooooooooooooooooooooooooooooo  '+url)
        self.response.headers['Content-Type'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        self.response.headers['Content-Disposition'] = 'attachment; filename="' + 'sample1.xls' + '"'
        self.response.headers['Accept-Encoding']='gzip, deflate'
        f = urllib.urlopen(url)
        data = f.read()
        # time.sleep(60)
        self.response.out.write(data)
        # time.sleep(5000)
        form_field = {
        "file":data
        }
        data = urllib.urlencode(form_field, doseq=True)
        url = 'http://23.21.114.69/xlsform/'
        if data is not None:
            headers = {
            'Content-Type': 'multipart/form-data; boundary=---------------------------4082427511200',
            'Content-Length': 'str(len(content))',
            }
            response_file = urlfetch.fetch(url, payload=data, method='POST', headers=headers)
            self.response.out.write(response_file.content)
        # upload_url = blobstore.create_upload_url('/upload')
        # files = pegasusFiles.PegasusFiles()
        # files.name = 'sheet_name'
        # files.file = db.Blob(self.request.get('csv_upload'))
        # files.put()
        # self.send_blob(file.file)

        # file = self.request.get('csv_import')
        # file  = '\n'.join(file.splitlines())
        # lines = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
        # output = StringIO.StringIO()
        # output.write(lines)
        # for eachRow in lines:
        #     output.write(eachRow)
        # self.response.out.write(output.getvalue())
        # self.sendFileToXForms(output)

        
        # output.write(self.request.get('csv_upload'))
        # self.sendFileToXForms(output)
        # self.response.out.write(output.getvalue())

        # self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        # self.redirect('/serve/%s' % str(file.key()))
        # body = json.loads(self.request.body)
        # token = body['accessToken']
        # self.response.out.write(token)
        # self.update("","1NNuNCTzzWiE-b4gJxyigY-nZPbfpnIReDipRmk-YOr4",token)



        google_sheet = self.request.get('url')

        self.read_google_sheet(google_sheet)
        # return
        self.uploadFiles(google_sheet)
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
            'Authorization': token
            }
        response = urlfetch.fetch(url, payload=content, method='PUT', headers=headers)
        # assert response.status_code == 200
        # return response.content
        self.response.out.write(response.content)

    def sendFileToXForms(self,content):
        user = users.get_current_user()
        url = 'http://23.21.114.69/xlsform/'
        headers = {
            'Content-Type': 'multipart/form-data; boundary=---------------------------4082427511200',
            'Content-Length': 'str(len(content))',
            }
        response = urlfetch.fetch(url, payload=content, method='POST', headers=headers)
        # assert response.status_code == 200
        # return response.content 
        failure_status = response.content.find('This field is required.')
        if(failure_status == -1):
            self.response.out.write(response.content)
        else:
            self.response.out.write('File format not acceptable')
        

    def uploadFiles(self, google_sheet,sheet_name):
        file = pegasusFiles.PegasusFiles()
        file.name = sheet_name
        file.file = db.Blob(google_sheet)
        file.put()
        self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        better = db.get(str(file.key))
        self.response.out.write(better.name)
        # # self.getFile(file.key())
        # self.submitFile(file.key())
        # self.response.out.write('http://pegasusrisesapp.appspot.com/' + str(file.key()))
        self.getFile(file.key())

    def getFile(self, key):
        file = db.get(key)
        if file is not None:
            self.response.headers['Content-Type'] = 'application/x-bittorrent'
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


        file = self.getFile(key)


    def create_file(self, filename,data):
        """Create a file.

        The retry_params specified in the open call will override the default
        retry params for this particular file handle.

        Args:
          filename: filename.
        """
        self.response.write('Creating file %s\n' % filename)

        write_retry_params = gcs.RetryParams(backoff_factor=1.1)
        gcs_file = gcs.open(filename,
                            'w',
                            content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            options={'x-goog-meta-foo': 'foo',
                                     'x-goog-meta-bar': 'bar'},
                            retry_params=write_retry_params)
        gcs_file.write(data)
        gcs_file.write(data + '\n')
        gcs_file.close()
        return gcs_file

