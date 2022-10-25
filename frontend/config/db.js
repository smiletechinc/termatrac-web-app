import { FirebaseApp, initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWsTi8VtE0d2mcBkGwE2z2ecK11B4tmsU",
  authDomain: "termatrac-a2016.firebaseapp.com",
  projectId: "termatrac-a2016",
  storageBucket: "termatrac-a2016.appspot.com",
  messagingSenderId: "219527952833",
  appId: "1:219527952833:web:85f597550c11887795d740",
  measurementId: "G-JVVNXCN730",
};

let app = FirebaseApp ? FirebaseApp() : initializeApp(firebaseConfig);
// let app = firebase.initializeApp(firebaseConfig)
export default app;
