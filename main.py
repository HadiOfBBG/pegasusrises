#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import os
import sys
import webapp2_extras.auth
import webapp2
import jinja2
import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache


template_dir = os.path.join(os.path.dirname(__file__),'templates')
os.path.join(os.path.dirname(__file__),'models')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),autoescape = True)


"""Main class i.e entry to the APP"""
class MainHandler(webapp2.RequestHandler):
	def add_libraries_folder_to_systems_path():
		sys.path.append(os.path.join(os.path.dirname(__file__), 'libs'))



	"""Handler for template"""
	def write(self, *a, **kw):
		self.response.out.write(*a,**kw)

	def render_str(self,template,**params):
		t = jinja_env.get_template(template)
		return t.render(params)

	def render(self,template,**kw):
		self.write(self.render_str(template,**kw))
		
	def get(self):
		self.render('test.html')



class GplusHandler(MainHandler):	
    def get(self):
        self.render('test.html')




app = webapp2.WSGIApplication([

	('/', MainHandler),
	('/signin', GplusHandler)

], debug=True)

