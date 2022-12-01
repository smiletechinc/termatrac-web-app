import axios from "axios";

const BASE_URL = "http://107.20.88.70:8080/infer_termite_rforest";

export const sendDataObjectToApi: (dataObject: object) => Promise<any> = (
  dataObject
) => {
  return new Promise(async (resolve, reject) => {
    console.log("api", dataObject);
    try {
      var headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const Axiosbody = {
        features: JSON.parse(dataObject),
        model: "rforest",
      };
      await axios
        .post(BASE_URL, Axiosbody, {
          headers: headers,
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
