// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCwEq0sXeov8Ru8pH9YWSG3Mn-XpHboI1k",
    authDomain: "twitter-clone-af81a.firebaseapp.com",
    projectId: "twitter-clone-af81a",
    storageBucket: "twitter-clone-af81a.appspot.com",
    messagingSenderId: "975668274001",
    appId: "1:975668274001:web:1bea65122aa698df47a970",
    measurementId: "G-P40J8GW778"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;