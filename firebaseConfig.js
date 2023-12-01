import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcJfoSluwPpmGf9DnPa5bGhIClyf-SEWc",
    authDomain: "react-native-auth-51504.firebaseapp.com",
    projectId: "react-native-auth-51504",
    storageBucket: "react-native-auth-51504.appspot.com",
    messagingSenderId: "714870198669",
    appId: "1:714870198669:web:a72fcc8c411b881688adc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export 
{
    auth,
    createUserWithEmailAndPassword
}