import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, fetchSignInMethodsForEmail } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";
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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then( async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const addUserData = async (name, surname, username, email, birthday, gender, createdAt, isAdmin, musics, profilePhoto, uid) => {
    try {
        const docRef = await addData("users", {
            name: name, 
            surname: surname,
            username: username,
            email: email,
            birthday: birthday,
            gender: gender,
            createdAt: createdAt,
            isAdmin: isAdmin,
            musics: musics,
            profilePhoto: profilePhoto,
            uid: uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const addMusicData = async (data, name, like, dislike, createdAt, description, isPublic, color, uid, owner_uid) => {
    try {
        const docRef = await addData("musics", {
            data: data,
            name: name, 
            like: like,
            dislike: dislike,
            description: description,
            createdAt: createdAt,
            isPublic: isPublic,
            color: color,
            uid: uid,
            owner_uid: owner_uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const addData = async (collectionName, object) => {
    return addDoc(collection(db, collectionName, object));
}


signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

export default db;
export { auth, provider, onAuthStateChanged, signInWithGoogle, signOut, addUserData, addMusicData };