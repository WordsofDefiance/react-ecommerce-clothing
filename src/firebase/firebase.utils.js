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
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

