
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCNwy1UM1-igVs7QYCe1kucmk_DERMxh6s",
  authDomain: "buzzsync---jornada.firebaseapp.com",
  projectId: "buzzsync---jornada",
  storageBucket: "buzzsync---jornada.appspot.com",
  messagingSenderId: "851866221616",
  appId: "1:851866221616:web:84d50fc8f28ff4ca5b41f5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;
