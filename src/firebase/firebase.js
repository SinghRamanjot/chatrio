import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  authDomain: "chatrio-819d4.firebaseapp.com",
  projectId: "chatrio-819d4",
  storageBucket: "chatrio-819d4.appspot.com",
  messagingSenderId: "654385355337",
  appId: "1:654385355337:web:3dd88f907f2edfc8ffbd98",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
