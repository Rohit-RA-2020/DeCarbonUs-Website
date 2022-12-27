// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "decarbonus-c1037.firebaseapp.com",
    databaseURL: "https://decarbonus-c1037-default-rtdb.firebaseio.com",
    projectId: "decarbonus-c1037",
    storageBucket: "decarbonus-c1037.appspot.com",
    messagingSenderId: "350949636849",
    appId: "1:350949636849:web:96f7ba5fc858cf749d8750",
    measurementId: "G-CVF6GX6LJ7",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
