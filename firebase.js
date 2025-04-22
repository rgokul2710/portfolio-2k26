// Importing Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHqv3EkgsA9iyW4EJD6IRCdZg78a9yd78",
    authDomain: "portfolio-2k26.firebaseapp.com",
    projectId: "portfolio-2k26",
    storageBucket: "portfolio-2k26.firebasestorage.app",
    messagingSenderId: "313180251597",
    appId: "1:313180251597:web:e5c9a3c0cb36750927d084"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);
