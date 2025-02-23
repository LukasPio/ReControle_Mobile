// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjtun6IwUqrqQv4hnU9hgrS5AZnDG8z7o",
  authDomain: "recontrole-b3815.firebaseapp.com",
  projectId: "recontrole-b3815",
  storageBucket: "recontrole-b3815.firebasestorage.app",
  messagingSenderId: "413353502819",
  appId: "1:413353502819:web:9c224ddb95ab38459b7056",
  measurementId: "G-RWBS6ZYLER"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
