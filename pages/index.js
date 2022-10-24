import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { SearchView } from "../components/SearchView/SearchView";
import { ResultView } from "../components/ResultView/ResultView";
import { TextareaAutosize, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { modelAddedHook } from "../hooks/ModelAddedFirebase";

export default function Home() {
  const [resultString, setResultString] = useState("");
  const [resultData, setResultData] = useState({});
  const { modelAddedFunction } = modelAddedHook();

  // useEffect(() => {
  //   console.log("result", resultData);
  // }, [resultData]);

  const resultButtonClick = () => {
    const a = resultString.split(" ");
    const a1 = a[a.length - 1];
    console.log("clicked", resultData);
    const modelObject = {
      modelData: resultData.modelData,
      modelType: resultData.modelType,
      modelResult: resultString,
      percantage: `${a1.replaceAll('"', "") * 100}%`,
    };
    modelAddedFunction(modelObject);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Termatrac Dashboard</title>
        <meta name="Termatrac Dashboard" content="Termatrac dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <left>
          <SearchView
            setResultString={setResultString}
            setResultData={setResultData}
          />
        </left>
        <ResultView text={resultString} onPress={resultButtonClick} />
        <right></right>
      </main>
      <Footer />
    </div>
  );
}
