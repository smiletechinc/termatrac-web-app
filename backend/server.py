from flask import Flask, request, jsonify
import json
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)



class_dict = {0:"None", 1:"Drywood", 2:"Subterranean"}


# Random forest Inference 
def infer_rforest(data):

    features = np.array(data['features'])
    
    print(type(features))

    print("Predicting Termite")

    # df = pd.DataFrame(data['features'])

    # print(df)

    loaded_model = pickle.load(open("rforest.sav", 'rb'))
    result = loaded_model.predict(features.reshape(1, -1))
    class_probabilities = loaded_model.predict_proba(features.reshape(1, -1))

    print(result, class_probabilities)

    response_data = {
            "Class" : class_dict[result[0]],
            "Accuracy" : class_probabilities[0][result[0]],
        }

    # final_result = "The predicted termite belongs to class " + class_dict[result[0]] + " with an accuracy of " + str(class_probabilities[0][result[0]])

    return response_data

# Infer KNN
def infer_knn(data):

    features = np.array(data['features'])
    
    print(type(features))

    print("Predicting Termite")

    # df = pd.DataFrame(data['features'])

    # print(df)

    loaded_model = pickle.load(open("knn.sav", 'rb'))
    result = loaded_model.predict(features.reshape(1, -1))
    class_probabilities = loaded_model.predict_proba(features.reshape(1, -1))

    print(result, class_probabilities)

    response_data = {
            "Class" : class_dict[result[0]],
            "Accuracy" : class_probabilities[0][result[0]],
        }

    # final_result = "The predicted termite belongs to class " + class_dict[result[0]] + " with an accuracy of " + str(class_probabilities[0][result[0]])

    return response_data

#  Infer Logreg
def infer_logreg(data):

    features = np.array(data['features'])
    
    print(type(features))

    print("Predicting Termite")

    # df = pd.DataFrame(data['features'])

    # print(df)

    loaded_model = pickle.load(open("logreg.sav", 'rb'))
    result = loaded_model.predict(features.reshape(1, -1))
    class_probabilities = loaded_model.predict_proba(features.reshape(1, -1))

    print(result, class_probabilities)

    response_data = {
            "Class" : class_dict[result[0]],
            "Accuracy" : class_probabilities[0][result[0]],
        }

    # final_result = "The predicted termite belongs to class " + class_dict[result[0]] + " with an accuracy of " + str(class_probabilities[0][result[0]])

    return response_data

# Infer Naive Bayes
def infer_naive(data):

    features = np.array(data['features'])
    
    print(type(features))

    print("Predicting Termite")

    # df = pd.DataFrame(data['features'])

    # print(df)

    loaded_model = pickle.load(open("naive.sav", 'rb'))
    result = loaded_model.predict(features.reshape(1, -1))
    class_probabilities = loaded_model.predict_proba(features.reshape(1, -1))

    print(result, class_probabilities)

    response_data = {
            "Class" : class_dict[result[0]],
            "Accuracy" : class_probabilities[0][result[0]],
        }

    # final_result = "The predicted termite belongs to class " + class_dict[result[0]] + " with an accuracy of " + str(class_probabilities[0][result[0]])

    return response_data



@app.route('/infer_termite', methods = ['POST'])
def infer():

    json_data = request.json

    print(json_data['model'])

    if(json_data['model'] == 'rforest'):
        result = infer_rforest(json_data)
    elif(json_data['model'] == 'knn'):
        result = infer_knn(json_data)
    elif(json_data['model'] == 'logreg'):
        result = infer_logreg(json_data)
    elif(json_data['model'] == 'naive'):
            result = infer_naive(json_data)
    
    #print("Printing Result:  ")
    #print(result)
    
    #print(result[0]['result'])
    
    
    
    #print("I am here")
    #final = unpack_cols(result)
    
    #client = connect_to_mongo('10.10.56.115:27017')
    #push_to_mongo(client, final, 'OLTP', 'mmocr')
    
    
    
    return result





if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=9002)



