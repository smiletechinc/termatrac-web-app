from flask import Flask, request, jsonify
import json
import pickle
import pandas as pd
import numpy as np
app = Flask(__name__)


@app.route('/infer_termite_rforest', methods = ['GET'])
def infer():

    # json_data = request.json

    result = "Hello World"

    return result






if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=9002)



