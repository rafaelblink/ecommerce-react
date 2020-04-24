import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCj0c_K1qPRXZlnxlS2wPPWorqHYn1VzT0',
  authDomain: 'crwn-db-8107d.firebaseapp.com',
  databaseURL: 'https://crwn-db-8107d.firebaseio.com',
  projectId: 'crwn-db-8107d',
  storageBucket: 'crwn-db-8107d.appspot.com',
  messagingSenderId: '110291390178',
  appId: '1:110291390178:web:0fee7a3032592a71cd58bb',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
