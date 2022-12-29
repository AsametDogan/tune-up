import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
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

const registerUser = (email, password) => {
    if(!userExists(email)){
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
}

const loginUser = (email, password) => {
    if(userExists(email)){
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
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

const addMusicData = async (data, name, like, dislike, createdAt, description, isPublic, uid, owner_uid) => {
    try {
        const docRef = await addData("musics", {
            data: data,
            name: name, 
            like: like,
            dislike: dislike,
            description: description,
            createdAt: createdAt,
            isPublic: isPublic,
            uid: uid,
            owner_uid: owner_uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const addData = async (collectionName, object) => {
    return addDoc(collection(db, collectionName + "/" + object.uid, object));
}

const forgetPassword = (email,) => {
    sendPasswordResetEmail(email).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

const userExists = (email) => {
    let methods = fetchSignInMethodsForEmail(email);
    if(methods.length != 0){
        return true;
    } else {
        return false;
    }
}

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

export default db;
export { auth, provider, onAuthStateChanged, signInWithGoogle, signOut, addUserData, addMusicData, registerUser, loginUser, forgetPassword };