import os
import webapp2
import jinja2
import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache


class QuestionsDetails(db.Model):
    """docstring for Questions for the database columns
    This model is used to save questions details on pegasus"""
    survey_name = db.TextProperty(required = True)
    question_db_field_name = db.StringProperty(required = True)
    created_date = db.DateTimeProperty(auto_now_add = True)