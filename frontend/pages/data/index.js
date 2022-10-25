import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { SearchView } from "../../components/SearchView/SearchView";
import { ResultView } from "../../components/ResultView/ResultView";
import { TextareaAutosize, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { uploadFileHook } from "../../hooks/useDataUpload";
import { modelAddedHook } from "../../hooks/ModelAddedFirebase";
import FilePicker, { InputErrorCode } from "@mavedev/react-file-picker";
import { connectStorageEmulator } from "firebase/storage";
export default function Data() {
  const { dataUploadService, fileUrl } = uploadFileHook();
  const { dataMetaUpload, isDataObject, dataObjectData, dataObjectFetched } =
    modelAddedHook();
  const [fileObject, setFile] = useState({});

  useEffect(() => {
    if (isDataObject) {
      console.log("dataObject", dataObjectData);
    } else {
      dataObjectFetched();
    }
  }, [isDataObject]);

  useEffect(() => {
    if (fileUrl != "") {
      console.log("fileUrl", fileUrl);
      console.log("fileObject", fileObject);
      const fileMeta = {
        name: fileObject.name,
        size: fileObject.size,
        filePath: fileUrl,
      };
      dataMetaUpload(fileMeta);
      setFile({});
    }
  }, [fileUrl]);
  const printAllErrors = (errorCode) => {
    if (InputErrorCode.containsExtensionError(errorCode)) {
      console.log("File has inappropriate extension");
    }
    if (InputErrorCode.containsMaxSizeError(errorCode)) {
      console.log("File size exceeded max size specified");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Termatrac Dashboard</title>
        <meta name="Termatrac Dashboard" content="Termatrac dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>Page under construction</main>
      <div>
        <FilePicker
          // maxSize={1}
          sizeUnit="MB"
          onFilePicked={(file) => {
            setFile(file);
            dataUploadService(file);
          }}
          onSuccess={() => {
            console.log("Success");
          }}
          onError={(code) => {
            printAllErrors(code);
          }}
        >
          <button type="button">Upload file</button>
        </FilePicker>
      </div>
      <Footer />
    </div>
  );
}
