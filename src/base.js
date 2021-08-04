import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBPCeoFWPibcNSEnGFwmaGR7bMtzyfR-Uw",
    authDomain: "fir-react-auth-5f17c.firebaseapp.com",
    projectId: "fir-react-auth-5f17c",
    storageBucket: "fir-react-auth-5f17c.appspot.com",
    messagingSenderId: "876707212210",
    appId: "1:876707212210:web:bb90b060722e6b3e8dd2ab",
    measurementId: "G-DZ80WKKLZK"
});

export default app;