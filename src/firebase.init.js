// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVzBm2Hhp1xlRyFyUYHCHrT9xHxTz5piw",
    authDomain: "eco-bd.firebaseapp.com",
    projectId: "eco-bd",
    storageBucket: "eco-bd.appspot.com",
    messagingSenderId: "944535594784",
    appId: "1:944535594784:web:922e99473234e97d0b1945",
    measurementId: "G-RRT12NT83C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);