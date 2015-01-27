import os
import webapp2
import jinja2

import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache
from google.appengine.api import users


template_dir = os.path.join(os.path.dirname(__file__), 'templates')
os.path.join(os.path.dirname(__file__), 'models')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir), autoescape=True)


"""Main class i.e entry to the APP"""

class JinjaTemplating(webapp2.RequestHandler):
	def render_template_with_values(self, html_file, values):
		t = jinja_env.get_template(html_file)
		self.response.write(t.render(values))


	def render_template_only(self, html_file):
		t = jinja_env.get_template(html_file)
		self.response.write(t.render())

		
