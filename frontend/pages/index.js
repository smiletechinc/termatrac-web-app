import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { SearchView } from "../components/SearchView/SearchView";
import { ResultView } from "../components/ResultView/ResultView";
import { TextareaAutosize, Button } from "@material-ui/core";
import { useState } from "react";

export default function Home() {
  const [resultString, setResultString] = useState("");
  const [resultData, setResultData] = useState({});

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
        <ResultView text={resultString} />
        <right></right>
      </main>
      <Footer />
    </div>
  );
}
