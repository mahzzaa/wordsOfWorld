import * as firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_Gz8XUxnBI6yTKCy0xk3G1SkLa_GSuA0",
    authDomain: "words-of-world-2ae57.firebaseapp.com",
    databaseURL: "https://words-of-world-2ae57.firebaseio.com",
    projectId: "words-of-world-2ae57",
    storageBucket: "words-of-world-2ae57.appspot.com",
    messagingSenderId: "1060205001499",
    appId: "1:1060205001499:web:d3a0c1d709626b9b7ef1be",
    measurementId: "G-X1PHBTC7FS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  export default db;