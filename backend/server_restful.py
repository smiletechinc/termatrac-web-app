from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import json
import pickle
import pandas as pd
import numpy as np
import ast

app = Flask(__name__)
api = Api(app)

class_dict = {0:"None", 1:"Drywood", 2:"Subterranean"}

class HelloWorld(Resource):
    def put(self):

        features = ast.literal_eval(request.form['features'])

        # print(features[2])

        # print("I am here")

        # result = "Sam is returned"

        features = np.array(features)
        
        print(type(features))

        print("Predicting Termite")

        # df = pd.DataFrame(data['features'])

        # print(df)

        loaded_model = pickle.load(open("rforest.sav", 'rb'))
        result = loaded_model.predict(features.reshape(1, -1))
        class_probabilities = loaded_model.predict_proba(features.reshape(1, -1))

        print(result, class_probabilities)

        final_result = "The predicted termite belongs to class " + class_dict[result[0]] + " with an accuracy of " + str(class_probabilities[0][result[0]])

        return final_result

        # return "Hello World"

api.add_resource(HelloWorld, '/infer_termite_rforest')

if __name__ == "__main__":
    app.run(debug=False)

