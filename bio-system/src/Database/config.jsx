// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaZ6zEgiLdWc5XMLA7HBUyInMxhIQ1YnE",
    authDomain: "bio-system-41b26.firebaseapp.com",
    projectId: "bio-system-41b26",
    storageBucket: "bio-system-41b26.appspot.com",
    messagingSenderId: "311456615763",
    appId: "1:311456615763:web:eab998a740a16e527425a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;