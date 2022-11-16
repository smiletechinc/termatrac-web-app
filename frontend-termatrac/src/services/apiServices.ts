import axios from "axios";

const BASE_URL = "http://107.20.88.70:9002/infer_termite";

export const sendDataObjectToApi: (dataObject: string, modelName: string) => Promise<any> = (
  dataObject,
  modelName
) => {
  return new Promise(async (resolve, reject) => {
    console.log("api", dataObject);
    try {
      var headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Access-Control-Allow-Credentials': 'true',
        'strict-origin-when-cross-origin': 'false'
      };
      const Axiosbody = {
        features: JSON.parse(dataObject),
        model: "rforest"
      };
      await axios
        .post(BASE_URL, Axiosbody, {
          headers: headers
        })
        .then((resonse) => {
          console.log("resposnee", resonse);
          resolve(resonse);
        })
        .catch((e) => {
          console.log("error", JSON.stringify(e));
          reject(e);
        });
    } catch (err) {
      reject(err);
    }
  });
};
