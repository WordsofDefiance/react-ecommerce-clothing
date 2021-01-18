import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDalclo9sv94bNmm6yHmGcPPxqkgPgTKbo",
    authDomain: "crwn-db-5694f.firebaseapp.com",
    projectId: "crwn-db-5694f",
    storageBucket: "crwn-db-5694f.appspot.com",
    messagingSenderId: "875662729183",
    appId: "1:875662729183:web:16115084148aac3a996e6a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date()

        try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
        } catch (error) {
            console.error('error creating user', error.message)
        }
    }

    return userRef;
}


export default firebase;

