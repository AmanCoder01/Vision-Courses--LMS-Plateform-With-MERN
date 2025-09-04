import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lms-ai-68a61.firebaseapp.com",
  projectId: "lms-ai-68a61",
  storageBucket: "lms-ai-68a61.firebasestorage.app",
  messagingSenderId: "745701784532",
  appId: "1:745701784532:web:09de347603cb8d86aef441",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}