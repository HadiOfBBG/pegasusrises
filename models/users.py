from google.appengine.ext import db

class UsersModel(db.Model):
    """docstring for AsciiDatabase"""
    usernmae = db.StringProperty(required = True)
    email = db.StringProperty(required = True)
    profile_pic_url = db.StringProperty()
    access_token = db.StringProperty(required = True)
    last_login = db.DateTimeProperty()
    created_date = db.DateTimeProperty(auto_now_add = True)