import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKs41slWCzdmNz-aGwcR9KSrPTBp3I48Q",
    authDomain: "invoice-app-4c128.firebaseapp.com",
    projectId: "invoice-app-4c128",
    storageBucket: "invoice-app-4c128.appspot.com",
    messagingSenderId: "279208288462",
    appId: "1:279208288462:web:e0786737b0aca5e4cff09f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
