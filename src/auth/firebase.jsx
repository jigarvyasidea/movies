import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCGhJz49Y4jhBThmX2Xx0IufCXJ3zVXw_4",
    authDomain: "movies-357c7.firebaseapp.com",
    projectId: "movies-357c7",
    storageBucket: "movies-357c7.appspot.com",
    messagingSenderId: "213993248518",
    appId: "1:213993248518:web:8d252324b917f58255f087",
    measurementId: "G-T8Z77HM7H9"
  };


  export const app = initializeApp(firebaseConfig);