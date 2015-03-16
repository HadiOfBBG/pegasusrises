import os
import webapp2
import jinja2
import urllib2
from xml.dom import minidom
from google.appengine.ext import db
from google.appengine.api import memcache


class VotoSubscriberDetails(db.Model):
    """docstring for Questions for the database columns
    This model is used to save questions details on pegasus"""
    phone_number = db.StringProperty(required = True)
    subscriber_id = db.IntegerProperty(required = True)
    group_id = db.IntegerProperty(required = True)
    created_date = db.DateTimeProperty(auto_now_add = True)

