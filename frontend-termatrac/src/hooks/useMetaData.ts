import { useState, useEffect, SetStateAction } from "react";
import { firebaseConfig } from "../config";
import firebase from "firebase/app";
import "firebase/database";
// import { get, getDatabase, ref } from "firebase/database";

// ----------------------------------------------------------------------

export default function useModelAdded() {
  let app1 = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase;

  const [isModelObject, setIsModelObject] = useState(false);
  const [modelObjectData, setModelObjectData] = useState({});

  const [isDataObject, setIsDataObject] = useState(false);
  const [dataObjectData, setDataObjectData] = useState([]);
  const [isDataAdded, setIsDataAdded] = useState(false);

  const modelObjectFetched: any = () => {
    setIsModelObject(false);
    const branch = `/ModelObject/`;

    try {
      const db = app1.database();
      const ModlObjectRef = db.ref(branch);
      ModlObjectRef.on("value", (snapshot: any) => {
        setIsModelObject(true);
        setModelObjectData(snapshot.val());
        console.log("data", snapshot.val());
      });
    } catch (error) {
      console.log("Error Finding Database");
    }
  };

  const modelAddedFunction: any = (modelObject: any) => {
    const branch = `/ModelObject/`;
    // if (app) {
    try {
      const db = app1.database();
      var modelId = db.ref(branch).push().key;
      var updatedModel = { ...modelObject, id: modelId };
      console.log("updatedModel", updatedModel);
      const dataAddedRef = db.ref(`/ModelObject/${modelId}`);
      console.log("dataAddedRef", dataAddedRef);
      dataAddedRef
        .set(updatedModel)
        .then(() => {
          console.log("data added", setIsDataAdded(true));
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log("Error Finding Database");
    }
    // }
  };

  return {
    modelObjectFetched,
    modelAddedFunction,
    isModelObject,
    setIsDataAdded,
    isDataAdded,
    modelObjectData
  };
}
