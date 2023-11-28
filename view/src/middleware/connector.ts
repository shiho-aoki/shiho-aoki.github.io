import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAX7HDFds2S9RTZ8e3e17-7MlKrweO4gIk",
    authDomain: "as-pml.firebaseapp.com",
    projectId: "as-pml",
    storageBucket: "as-pml.appspot.com",
    messagingSenderId: "853490735231",
    appId: "1:853490735231:web:9a66a33cc4abaac695c74a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
