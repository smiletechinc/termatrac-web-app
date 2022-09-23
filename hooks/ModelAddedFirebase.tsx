import { useCallback, useState } from "react";
import { getDatabase, ref, get, set, push } from "firebase/database";
import app from "../config/db";

export const modelAddedHook = () => {
  const [isModelObject, setIsModelObject] = useState(false);
  const [modelObjectData, setModelObjectData] = useState([]);

  const dataMetaUpload = useCallback(async (dataMeta: any) => {
    const branch = `/dataObject/`;
    if (app) {
      try {
        const db = getDatabase(app);

        var fileId = push(ref(db, branch)).key;
        var updateData = { ...dataMeta, id: fileId };
        set(ref(db, `/dataObject/${fileId}`), updateData)
          .then(() => {
            console.log("data done");
          })
          .catch((error) => {
            console.log("Data Not Inserted", error);
          });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  }, []);

  const modelObjectFetched = useCallback(async () => {
    setIsModelObject(false);
    const branch = `/ModelObject/`;
    if (app) {
      try {
        const db = getDatabase(app);
        get(ref(db, branch))
          .then((snapShot) => {
            setIsModelObject(true);
            setModelObjectData(snapShot.val());
          })
          .catch((error) => {
            console.log("Data Not Found", error);
          });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  }, []);

  const modelAddedFunction = useCallback(async (modelObject: any) => {
    const branch = `/ModelObject/`;
    if (app) {
      try {
        const db = getDatabase(app);

        var modelId = push(ref(db, branch)).key;
        var updatedModel = { ...modelObject, id: modelId };
        set(ref(db, `/ModelObject/${modelId}`), updatedModel)
          .then(() => {
            console.log("data done");
          })
          .catch((error) => {
            console.log("Data Not Inserted", error);
          });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  }, []);

  return {
    modelAddedFunction,
    modelObjectFetched,
    dataMetaUpload,
    isModelObject,
    modelObjectData,
  };
};
