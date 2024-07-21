// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS1LtSs2-IzL_3sYI5eX1rK87x2tJOMYU",
    authDomain: "travel-packing-cbda7.firebaseapp.com",
    projectId: "travel-packing-cbda7",
    storageBucket: "travel-packing-cbda7.appspot.com",
    messagingSenderId: "577491096690",
    appId: "1:577491096690:web:5d224694cf7f87334a1eeb"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };