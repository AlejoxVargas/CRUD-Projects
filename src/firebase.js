import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "admindashboardcrud.firebaseapp.com",
  projectId: "admindashboardcrud",
  storageBucket: "admindashboardcrud.appspot.com",
  messagingSenderId: "342735572693",
  appId: "1:342735572693:web:d3056ef0d8527d2bad1c5c",
};

const app = initializeApp(firebaseConfig);
