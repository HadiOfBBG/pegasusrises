import csv
from collections import defaultdict
import StringIO
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from jinja_template import JinjaTemplating
from google.appengine.ext import db
from google.appengine.api import memcache
from models.pegasus_model import BbgDemoModel
from models.dynamic_model_properties import DynamicModelsProperties
import json



class SaveDataIntoPegasusDatabase(JinjaTemplating):

    """docstring for ReadDataFromPegasus"""
    def get(self):
        JinjaTemplating.render_template_only(self, 'aliu_test.html')


    def post(self):

        print ("About to save data into pegasus DB")
        self.saveDataIntoDatabase()
        return


    def saveDataIntoDatabase(self):
        # dynamic_expando_model = BbgDemoModel()
        # dynamic_expando_model.name = 'Kanton Latifa'
        # dynamic_expando_model.business_status = 'yes'
        # dynamic_expando_model.years_of_existence = 23
        # dynamic_expando_model.sources_of_funding = 'personal,loan,family_support'
        # dynamic_expando_model.location = 'Accra, Ghana'
        # dynamic_expando_model.business_building_pic = 'https://pegasusodk.appspot.com/view/binaryData?blobKey=build_Software-Engagement-Test_1420717947%5B%40version%3Dnull+and+%40uiVersion%3Dnull%5D%2Fdata%5B%40key%3Duuid%3A25acebc0-db2d-464a-bea3-aa05b5767239%5D%2Fpassport_picture&previewImage=true'
        # dynamic_expando_model.start_time = 'Thu Feb 19 17:40:25 UTC 2015'
        # dynamic_expando_model.end_time = 'Thu Feb 19 17:40:56 UTC 2015'
        # dynamic_expando_model.device_identity = '358099058816851'


        dynamic_expando_model.put()

        dyanamic_model_fields = dynamic_expando_model._properties

        list_of_properties_for_dynamic_model = []

        for property in dyanamic_model_fields:
            list_of_properties_for_dynamic_model.append(property)

        model_name = 'BbgDemoModel'
        insert_a_new_dynamic_model_property = DynamicModelsProperties(model_name = model_name, model_properties = list_of_properties_for_dynamic_model)
        insert_a_new_dynamic_model_property.put()
        print ("A new dynamic propert saved")

        self.response.out.write('A new dynamic property saved\n')
        self.response.out.write(list_of_properties_for_dynamic_model)






