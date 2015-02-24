import os
import webapp2
import jinja2
import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache


class Questions(db.Model):
    """docstring for Questions for the database columns
    This model is used to save questions details on pegasus"""
    survey_name = db.TextProperty(required = True)
    question = db.TextProperty(required = True)
    question_field = db.StringProperty(required = True)
    possible_answers = db.StringProperty()
    possible_answers_labels = db.TextProperty()
    question_type = db.StringProperty()
    created_date = db.DateTimeProperty(auto_now_add = True)