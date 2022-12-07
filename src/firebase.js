import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAXtMxO3wMRgObOV24uRgAVwe6UIIOJSmE",
    authDomain: "tune-up-680d4.firebaseapp.com",
    projectId: "tune-up-680d4",
    storageBucket: "tune-up-680d4.appspot.com",
    messagingSenderId: "203450716006",
    appId: "1:203450716006:web:1f863432a31e8c11bf02a7",
    measurementId: "G-04CX2XLFCM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}


signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});




export default db;
export { auth, provider, onAuthStateChanged, signInWithGoogle, signOut };