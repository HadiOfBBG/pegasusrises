import os
import webapp2
import jinja2
import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache


class DynamicModelsProperties(db.Model):
    """docstring for Questions for the database columns
    This model is used to save questions details on pegasus"""
    model_name = db.TextProperty(required = True)
    model_properties = db.StringListProperty(required = True)
