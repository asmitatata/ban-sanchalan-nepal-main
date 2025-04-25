
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
export default app;
