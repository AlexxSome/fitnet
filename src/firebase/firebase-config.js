import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4Xfyf_HiNsv1w1KnE80en2Sp9c8HeRXc",
    authDomain: "fitnet-app-410a4.firebaseapp.com",
    projectId: "fitnet-app-410a4",
    storageBucket: "fitnet-app-410a4.appspot.com",
    messagingSenderId: "917561381160",
    appId: "1:917561381160:web:6c79d5cafc6e754f0cc01d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
