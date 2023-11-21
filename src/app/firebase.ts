// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxa0hPbgpmfQjN6iqFohPci5FCnQ235EM",
  authDomain: "gs-biscards-frontend.firebaseapp.com",
  projectId: "gs-biscards-frontend",
  storageBucket: "gs-biscards-frontend.appspot.com",
  messagingSenderId: "138074390977",
  appId: "1:138074390977:web:d943a5202af2978b446f40",
  measurementId: "G-YC82Q0NFVS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);