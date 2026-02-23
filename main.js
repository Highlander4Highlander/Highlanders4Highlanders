// Import the needed functins from SDKs
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries
import { } from 'firebase/data-connect';
import { } from "firebase/messaging";
import { } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBymEquy0fhmQTnVFZKbAwM87AqcmEGl1A",
  authDomain: "highlanders4highlanders.firebaseapp.com",
  projectId: "highlanders4highlanders",
  storageBucket: "highlanders4highlanders.firebasestorage.app",
  messagingSenderId: "714877036093",
  appId: "1:714877036093:web:002671bac5c3b685086c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
