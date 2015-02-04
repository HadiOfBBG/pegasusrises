import csv
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from main import *
from jinja_template import JinjaTemplating
import StringIO

class CSVUploadHandler(JinjaTemplating):
    def get(self):
        user = users.get_current_user()
        if user:
            template_values = {
                'logout_url': users.create_logout_url('/'),
                'username': user.nickname()
            }
            JinjaTemplating.render_template_with_values(self, 'upload_csv.html', template_values)
        else:
            self.redirect('/')  

    def post(self):
        file = self.request.get('file')
        file  = '\n'.join(file.splitlines())
        catalog = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
        #self.response.out.write(catalog)
        for row in catalog: 
            self.response.out.write(row) 
        #self.response.write(catalog)
    #def post(self):
        #content = self.request.get('catalog', 'rU')
        #content = '\n'.join(file.splitlines())
        #read_content = csv.reader(StringIO.StringIO(file),dialect=csv.excel_tab)
        #self.response.write(read_content)
        #for x in read_content:
            #self.response.write(x)

