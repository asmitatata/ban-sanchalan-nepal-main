import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqocykU-GkovHP0Y0yotpsNED-jtQKBpU",
  authDomain: "forestdepartment-9f70a.firebaseapp.com",
  projectId: "forestdepartment-9f70a",
  storageBucket: "forestdepartment-9f70a.firebasestorage.app",
  messagingSenderId: "1057074015139",
  appId: "1:1057074015139:web:eb5f74c2e8b09efd010816",
  measurementId: "G-5WVH9EZ2E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
