import firebase from 'firebase/app' 
import 'firebase/firestore'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBO8sRnV1eJRzF0-uyZgez_p1nxLamzUhI",
    authDomain: "words-of-world-5b4be.firebaseapp.com",
    databaseURL: "https://words-of-world-5b4be.firebaseio.com",
    projectId: "words-of-world-5b4be",
    storageBucket: "words-of-world-5b4be.appspot.com",
    messagingSenderId: "898181647295",
    appId: "1:898181647295:web:85e545bb6cd2ee95bcef0a",
    measurementId: "G-Z2J6LC1JLX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true});

  export default db;