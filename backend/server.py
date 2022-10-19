from flask import Flask, request, jsonify
import json
import pickle
import pandas as pd
import numpy as np
app = Flask(__name__)




class_dict = {0:"None", 1:"Drywood", 2:"Subterranean"}

def infer_rforest(data):
    
    result = "Sam is returned"

    features = np.array(data['features'])
    
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


@app.route('/infer_termite_rforest', methods = ['POST'])
def infer():

    json_data = request.json
    result = infer_rforest(json_data)
    
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



