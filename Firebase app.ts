// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_JnCT6htTbZlxVRNWgDb-od4WcrWf9Ls",
  authDomain: "hate-speech-project-eb950.firebaseapp.com",
  projectId: "hate-speech-project-eb950",
  storageBucket: "hate-speech-project-eb950.appspot.com",
  messagingSenderId: "1081874255252",
  appId: "1:1081874255252:web:0451ebada83436b0e95381",
  measurementId: "G-WZ12KG80D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);