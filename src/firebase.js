import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpXBgrKuOoBWyGaUev0WhSFTkfgssujbU",
  authDomain: "chatter-a9fb2.firebaseapp.com",
  projectId: "chatter-a9fb2",
  storageBucket: "chatter-a9fb2.appspot.com",
  messagingSenderId: "1027370559680",
  appId: "1:1027370559680:web:70310eee45aa6d35446525"
};

export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db = getFirestore(app);