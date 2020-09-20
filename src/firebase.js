// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZOqGGTlOFOJ7MOGv8ROHcB9Gv6dm2phA",
  authDomain: "twitter-clone-9d735.firebaseapp.com",
  databaseURL: "https://twitter-clone-9d735.firebaseio.com",
  projectId: "twitter-clone-9d735",
  storageBucket: "twitter-clone-9d735.appspot.com",
  messagingSenderId: "206923099898",
  appId: "1:206923099898:web:be1b0a048d434f897aa343",
  measurementId: "G-TZ63XGXGHK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
