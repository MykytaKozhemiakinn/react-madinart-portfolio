import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzgZErucP_p3Rs4ilRpplnbsH-0Lj0_QA",
  authDomain: "e-commerce-shop-dc68b.firebaseapp.com",
  databaseURL: "https://e-commerce-shop-dc68b.firebaseio.com",
  projectId: "e-commerce-shop-dc68b",
  storageBucket: "e-commerce-shop-dc68b.appspot.com",
  messagingSenderId: "950147081480",
  appId: "1:950147081480:web:0cc1a095a0414651c2b8bd",
  measurementId: "G-SJCNTMC2N4",
});

var db = firebaseApp.firestore();

export { db };
