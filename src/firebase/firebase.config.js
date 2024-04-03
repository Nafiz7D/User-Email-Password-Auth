// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiY5VOIEKycGAewnmbtl3yKon_2DBaCUs",
    authDomain: "user-email-password-auth-1cf73.firebaseapp.com",
    projectId: "user-email-password-auth-1cf73",
    storageBucket: "user-email-password-auth-1cf73.appspot.com",
    messagingSenderId: "1079172228664",
    appId: "1:1079172228664:web:288fc8525b8b3ef63ba8cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;