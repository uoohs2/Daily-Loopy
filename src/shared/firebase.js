import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQPpeSNApVKL9guTnFZyQiwSnUMeyb1Ik",
  authDomain: "daily-loopy.firebaseapp.com",
  projectId: "daily-loopy",
  storageBucket: "daily-loopy.appspot.com",
  messagingSenderId: "1058528881421",
  appId: "1:1058528881421:web:4e5617962cb58893119e44",
  measurementId: "G-XXFS4VZL8H",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
