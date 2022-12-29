// import { initializeApp } from "firebase/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, fetchSignInMethodsForEmail, browserLocalPersistence, setPersistence } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//     apiKey: "AIzaSyAXtMxO3wMRgObOV24uRgAVwe6UIIOJSmE",
//     authDomain: "tune-up-680d4.firebaseapp.com",
//     projectId: "tune-up-680d4",
//     storageBucket: "tune-up-680d4.appspot.com",
//     messagingSenderId: "203450716006",
//     appId: "1:203450716006:web:1f863432a31e8c11bf02a7",
//     measurementId: "G-04CX2XLFCM"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);

// const registerUser = async (email, password) => {
//     // FIXME: userExists check not working
//     //if(!userExists(email)){
//     console.log("Creating user");
//     await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user.uid);
//         addUserData("", "", "", "", "", "", "", "", "", "", user.uid);
//         console.log("User successfully created");
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
//     //}

// }

// const loginUser = async (email, password) => {
//     // FIXME: Not Working Again
//     //if (userExists(email)) {
//     await setPersistence(auth, browserLocalPersistence)
//         .then(async () => {
//             // Existing and future Auth states are now persisted in the current
//             // session only. Closing the window would clear any existing state even
//             // if a user forgets to sign out.
//             // ...
//             // New sign-in will be persisted with session persistence.
//             return await signInWithEmailAndPassword(auth, email, password).then((response) => {
//                 getData("users", response.user.uid);
//             });

//         })
//         .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
//     //}

// }

// const addUserData = async (name, surname, username, email, birthday, gender, createdAt, isAdmin, musics, profilePhoto, uid) => {
//     try {
//         await addData("users", {
//             name: name,
//             surname: surname,
//             username: username,
//             email: email,
//             birthday: birthday,
//             gender: gender,
//             createdAt: createdAt,
//             isAdmin: isAdmin,
//             musics: musics,
//             profilePhoto: profilePhoto,
//             uid: uid,
//         });
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

// const getData = async (collectionName, uid) => {
//     const docRef = doc(db, collectionName, uid);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }

// const getAllData = async (collectionName) => {

//     const querySnapshot = await getDocs(collection(db, collectionName));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// }

// const addMusicData = async (data, name, like, dislike, createdAt, description, isPublic, uid, owner_uid) => {
//     try {
//         const docRef = await addData("musics", {
//             data: data,
//             name: name,
//             like: like,
//             dislike: dislike,
//             description: description,
//             createdAt: createdAt,
//             isPublic: isPublic,
//             uid: uid,
//             owner_uid: owner_uid,
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

// const addData = async (collectionName, object) => {
//     console.log(object);
//     return await setDoc(doc(db, collectionName, object.uid), object);
// }

// const forgetPassword = (email) => {
//     sendPasswordResetEmail(email).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// }

// const userExists = async (email) => {
//     const methods = await fetchSignInMethodsForEmail(auth, email);
//     if (methods.length != 0) {
//         console.log("True");
//         return true;
//     } else {
//         console.log("false");
//         return false;
//     }

// }

// signOut(auth).then(() => {
//     // Sign-out successful.
// }).catch((error) => {
//     // An error happened.
// });

// export default db;
// export { auth, provider, onAuthStateChanged, signOut, addUserData, addMusicData, registerUser, loginUser, forgetPassword };