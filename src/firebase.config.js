import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCDeUmco0Ejd2YXp2Cj5NIoDjKSLaE3JE",
  authDomain: "swiggy-food.firebaseapp.com",
  projectId: "swiggy-food",
  storageBucket: "swiggy-food.appspot.com",
  messagingSenderId: "735686665785",
  appId: "1:735686665785:web:c5880e3a65951f2fcd0fe8",
  measurementId: "G-YR3ZYEKFHB"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, db, storage };
