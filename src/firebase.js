import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOCCNIFPMFDL2BhF4V6Eko_PXOZAtVdSI",
    authDomain: "eco-commute-974c5.firebaseapp.com",
    projectId: "eco-commute-974c5",
    storageBucket: "eco-commute-974c5.firebasestorage.app",
    messagingSenderId: "989907915657",
    appId: "1:989907915657:web:3bdceac98ee1a8ad93c758",
    measurementId: "G-N2JYN79J74"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };