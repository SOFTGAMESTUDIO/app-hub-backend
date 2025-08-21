// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxZD9v4rH5e3VBUE_37s_M5mzeJD-Zz9k",
  authDomain: "apk-store-90e52.firebaseapp.com",
  projectId: "apk-store-90e52",
  storageBucket: "apk-store-90e52.firebasestorage.app",
  messagingSenderId: "352993687207",
  appId: "1:352993687207:web:a5a20b64fa7aeaf8040d82",
  measurementId: "G-XTKPXSKRW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);


export { db };
