import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbwnpfwNCPR-PlU3C9_7eCWhGtxPErSvo",
    authDomain: "pruebatenica-b507b.firebaseapp.com",
    projectId: "pruebatenica-b507b",
    storageBucket: "pruebatenica-b507b.appspot.com",
    messagingSenderId: "437293297094",
    appId: "1:437293297094:web:fa9326f8f9a992765e56c7"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };