import { useCallback, useState } from "react";
import {
  getDatabase,
  ref,
  get,
  startAt,
  query,
  orderByChild,
  equalTo,
  set,
  child,
  endAt,
  push,
} from "firebase/database";

import app from "../config/db";

interface Props {
  arabictext: any;
}

export const modelAddedHook = () => {
  const [isVerseObject, setIsVerseObject] = useState(false);
  const [verseObject, setVerseObject] = useState([]);
  const [isSurahObject, setIsSurahObject] = useState(false);
  const [surahObject, setSurahObject] = useState([]);
  const [isVerseTranslate, setIsVerseTransalte] = useState(false);
  const [verseTranslateObject, setVerseTranslateObject] = useState([]);
  const [errorStatus, setErrorStatus] = useState("");

  const searchAyatTranslation = async (verseKey: string) => {
    console.log("verseKey", verseKey);
    const branch = `/translation/English`;
    if (app) {
      try {
        const db = getDatabase(app);
        const queryRef = query(
          ref(db, branch),
          orderByChild("ayatId"),
          equalTo(verseKey)
        );
        get(queryRef)
          .then((response: any) => {
            if (response.val()) {
              setVerseTranslateObject(response.val());
              setIsVerseTransalte(true);
            }
          })
          .catch((error) => {
            console.log("No data available", error);
          });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  };
  const searchSurahName = async (surahNumber: string) => {
    console.log("ayatId", surahNumber);
    const branch = `/surahMeta/`;
    if (app) {
      try {
        const db = getDatabase(app);
        const queryRef = query(
          ref(db, branch),
          orderByChild("index"),
          equalTo(surahNumber)
        );
        get(queryRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              setSurahObject(snapshot.val());
              setIsSurahObject(true);
            }
          })
          .catch((error) => {
            console.log("No data available in surahMeta", error);
          });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  };

  const modelAddedFunction = useCallback(async (modelObject: any) => {
    // setIsSurahObject(false);
    // setIsVerseObject(false);
    // setIsVerseTransalte(false);
    // console.log("app", app);
    const branch = `/ModelObject/`;
    if (app) {
      try {
        const db = getDatabase(app);
        console.log("db", db);
        // var key = app.child(ref(db, branch)).push().key;
        // console.log("key", app.child("ModelObject").push());
        // console.log("newKe", push(refV, "a").key)

        var keyi = push(ref(db, branch)).key;
        console.log("key", keyi);

        var a = { ...modelObject, id: keyi };
        const refV = ref(db, branch);
        const branchSet = `/ModelObject/${keyi}`;
        set(ref(db, branchSet), a).then(() => {
          console.log("data done");
        });
        // get(ref(db,branch))
        //   .then((snapshot) => {
        //     if (snapshot.exists()) {
        //       setVerseObject(snapshot.val());
        //       setIsVerseObject(true);
        //     }
        //   })
        //   .catch((error) => {
        //     console.log("No data available", error);
        //     setErrorStatus("No data available, Please Try Again Later!");
        //   });
      } catch (error) {
        console.log("Error Finding Database");
      }
    }
  }, []);

  return {
    modelAddedFunction,
    searchSurahName,
    searchAyatTranslation,
    verseObject,
    surahObject,
    verseTranslateObject,
    isVerseObject,
    isSurahObject,
    isVerseTranslate,
    errorStatus,
  };
};
