import * as firebase from 'firebase';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyDu-wgglieY756llCj2Fs8fATZAeXwQI-4",
    authDomain: "trellolessandro.firebaseapp.com",
    databaseURL: "https://trellolessandro.firebaseio.com",
    projectId: "trellolessandro",
    storageBucket: "trellolessandro.appspot.com",
    messagingSenderId: "942069207667",
    appId: "1:942069207667:web:16a830f1baabbb952a1006",
    measurementId: "G-H0J202QNH3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.firestore();