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
import styled from 'styled-components';

//Styles start
export const ModelDataObjectList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 40px 10px;
`;
export const ModelDataObjectItemContainer = styled.a`
  background: #404a42;
  border-radius: 20px;
  height: 300px;
  overflow: hidden;
  color: #fff;
  transition: 0.4s;
  &:hover {
    filter: brightness(1.2);
    transform: scale(0.98);
  }
  > section {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
  }
`;

export const ModelDataObjectHeader = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  background-image: url("https://www.transparenttextures.com/patterns/dark-mosaic.png");
  height: 50px;
  padding: 40px 10px;
`;

export const ModelDataObjectItem = styled.section`
  strong,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  strong {
    font-size: 18px;
    -webkit-line-clamp: 3;
  }
  p {
    margin-top: 15px;
    opacity: 0.6;
    font-size: 14px;
    line-height: 20px;
    -webkit-line-clamp: 4;
  }
`;

export const JobTags = styled.section`
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
`;

export const JobTag = styled.span`
  color: ${(props) => props.color};
  background: ${(props) => darken(0.2, rgba(props.color, 0.1))};
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 999px;
  font-weight: 700;
  border: 2px solid ${(props) => props.color};
`;
///Styles end

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
