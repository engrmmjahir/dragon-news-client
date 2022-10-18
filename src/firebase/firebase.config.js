// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1ilcgzbJrFjCyrd2j7fDnHXQp8bcSTEw",
    authDomain: "dragon-news-e1638.firebaseapp.com",
    projectId: "dragon-news-e1638",
    storageBucket: "dragon-news-e1638.appspot.com",
    messagingSenderId: "728673824003",
    appId: "1:728673824003:web:d19ede12c06cc06f610d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;