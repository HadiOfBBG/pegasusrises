import webapp2
from main import MainHandler
from dbcsv import DbFromCsv,TestClass

# define all routes here with their appropriate handlers
#Note: remember to import your module and the appropriate objects in the model or that you
# will use in the routes
routes = [
    (r'/', MainHandler),
    (r'/testbyaliu', TestClass),
    (r'/postcsv', DbFromCsv),

]

config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'something-very-very-secret',
}

app = webapp2.WSGIApplication(routes=routes, debug=True, config=config)

# app = webapp2.WSGIApplication([
# 	('/', MainHandler)
# ], debug=True)