import csv
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from main import *
from jinja_template import JinjaTemplating


class DashboardHandler(JinjaTemplating):
    def get(self):
        user = users.get_current_user()
        if user:
            template_values = {
                'logout_url': users.create_logout_url('/'),
                'username': user.nickname()
            }
            JinjaTemplating.render_angular_dashboard_template_with_values(self, 'index.html', template_values)
        else:
            self.redirect('/')  
