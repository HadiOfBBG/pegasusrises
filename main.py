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
import webapp2
import jinja2

import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache
from google.appengine.api import users
from jinja_template import JinjaTemplating



class MainHandler(JinjaTemplating):
		def get(self):
			user = users.get_current_user()
			if user:
				url = users.create_login_url('/admin')
				# users.create_logout_url('/')
				url_linktext = 'Login'
			else:
				url = users.create_login_url('/admin')
				url_linktext = 'Login'
			template_values = {
			'url': url,
			'url_linktext': url_linktext
			}
			JinjaTemplating.render_template_with_values(self, 'index.html', template_values) 
