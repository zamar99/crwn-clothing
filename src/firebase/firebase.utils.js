import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDpqsghGYgxhlXKhTcwYQPpbQnxWa7So4o',
  authDomain: 'crwn-db-9ae2a.firebaseapp.com',
  databaseURL: 'https://crwn-db-9ae2a.firebaseio.com',
  projectId: 'crwn-db-9ae2a',
  storageBucket: 'crwn-db-9ae2a.appspot.com',
  messagingSenderId: '122341224773',
  appId: '1:122341224773:web:41a006d6dd17c49baace2c',
  measurementId: 'G-E3WSLGMM9C'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;