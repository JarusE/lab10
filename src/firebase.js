import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzoPuu3kH1ke_cLQaK84vkRYS6c9KPXXc",
  authDomain: "lab10-ba71f.firebaseapp.com",
  projectId: "lab10-ba71f",
  storageBucket: "lab10-ba71f.firebasestorage.app",
  messagingSenderId: "778324901608",
  appId: "1:778324901608:web:119c0d6449b0c90857135d",
  measurementId: "G-TGFBCJX7LB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;