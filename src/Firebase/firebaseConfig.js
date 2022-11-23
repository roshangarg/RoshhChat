
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADJjLdu59SkfOpQ5oagPdgA381hM_gd1Y",
  authDomain: "roshan-chat-app.firebaseapp.com",
  projectId: "roshan-chat-app",
  storageBucket: "roshan-chat-app.appspot.com",
  messagingSenderId: "766768118792",
  appId: "1:766768118792:web:531a1dc4f09d90f3d725bd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();