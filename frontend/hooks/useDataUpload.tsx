import React, { useCallback, useState } from "react";
import {
  getStorage,
  ref,
  uploadString,
  uploadBytes,
  UploadTask,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import app from "../config/db";

const storage = getStorage(app);
storage.maxOperationRetryTime = 15000;

export const uploadFileHook = () => {
  const [fileUrl, setFileUrl] = useState("");

  const dataUploadService = useCallback(async (fileContent: any) => {
    console.log("fileCOntect", fileContent);
    const fileName = fileContent.name;
    const storageRef = ref(storage, `DataSet/${fileName}`);
    console.log("storageRef", storageRef);
    const metadata = {
      contentType: fileContent.type,
    };
    const uploadTask = uploadBytesResumable(storageRef, fileContent, metadata);
    uploadTask.pause;
    uploadTask.resume;
    console.log("uploadTask", uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
        });
      }
    );
  }, []);

  return {
    dataUploadService,
    fileUrl,
  };
};
