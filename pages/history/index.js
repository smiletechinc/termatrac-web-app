import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { SearchView } from "../../components/SearchView/SearchView";
import { ResultView } from "../../components/ResultView/ResultView";
import { TextareaAutosize, Button } from "@material-ui/core";
import { useEffect } from "react";
import { modelAddedHook } from "../../hooks/ModelAddedFirebase";
import {
  ModelDataObjectList,
  ModelDataObjectHeader,
  ModelDataObjectItem,
  ModelDataObjectItemContainer,
  JobTag,
  JobTags,
} from "./styles";

export default function History() {
  const { modelObjectFetched, isModelObject, modelObjectData } =
    modelAddedHook();
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  useEffect(() => {
    if (!isModelObject) {
      modelObjectFetched();
    }
  }, [isModelObject]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Termatrac Dashboard</title>
        <meta name="Termatrac Dashboard" content="Termatrac dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <ModelDataObjectList>
          {modelObjectData &&
            Object.values(modelObjectData).map((item) => {
              console.log("item", item.percantage);
              return (
                <ModelDataObjectItemContainer target="_blank">
                  <ModelDataObjectHeader bgColor={bgColor}>
                    <strong>{item.modelName}</strong>{" "}
                  </ModelDataObjectHeader>
                  <section>
                    <ModelDataObjectItem>
                      <strong>{item.modelType}</strong>
                      <strong>{item.percantage}</strong>
                      <p>{item.modelData}</p>
                    </ModelDataObjectItem>
                  </section>
                </ModelDataObjectItemContainer>
              );
            })}
        </ModelDataObjectList>
      </main>
      <Footer />
    </div>
  );
}
