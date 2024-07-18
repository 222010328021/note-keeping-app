import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "abcdef12345",
  authDomain: "Google OAuth 2.0",
  projectId: "a43f5hlkttyasbligfd",
  storageBucket: "fsawghk.s3.amazonaws.com",
  messagingSenderId: "1234567890abcdef",
  appId: "ftgjmgsaffhgnxfswt"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
