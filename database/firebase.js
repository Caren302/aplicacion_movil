import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAX0Mv5HgzxVoLumrpyQzYnirjYLkOYtTU",
    authDomain: "nemilis-522d4.firebaseapp.com",
    databaseURL: "https://nemilis-522d4-default-rtdb.firebaseio.com",
    projectId: "nemilis-522d4",
    storageBucket: "nemilis-522d4.appspot.com",
    messagingSenderId: "772307036289",
    appId: "1:772307036289:web:72206799043f6a2fc1c580",
    measurementId: "G-Z7NNCVFC05"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
    firebase,
    db
  };