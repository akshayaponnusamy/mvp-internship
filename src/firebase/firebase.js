// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAM52ijcDhrMSuiwCTIMlaAJejSQuS_qqo",
  authDomain: "student-grievance-app.firebaseapp.com",
  projectId: "student-grievance-app",
  storageBucket: "student-grievance-app.firebasestorage.app",
  messagingSenderId: "589941445131",
  appId: "1:589941445131:web:a69bf0744c6575b11e6d0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
