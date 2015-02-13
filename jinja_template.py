import os
import webapp2
import jinja2

import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache
from google.appengine.api import users

# Jinja template directory for front page
template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir), autoescape=True)

# Jinja template directory for dashboard
angular_build_dir = os.path.join(os.path.dirname(__file__), 'client/dist/html')
jinja_angular_env = jinja2.Environment(loader=jinja2.FileSystemLoader(angular_build_dir), autoescape=True)

os.path.join(os.path.dirname(__file__), 'models')


"""Main class i.e entry to the APP"""


class JinjaTemplating(webapp2.RequestHandler):

    def render_template_with_values(self, html_file, values):
        t = jinja_env.get_template(html_file)
        self.response.write(t.render(values))

    def render_angular_dashboard_template_with_values(self, html_file, values):
        t = jinja_angular_env.get_template(html_file)
        self.response.write(t.render(values))

    def render_template_only(self, html_file):
        t = jinja_env.get_template(html_file)
        self.response.write(t.render())
