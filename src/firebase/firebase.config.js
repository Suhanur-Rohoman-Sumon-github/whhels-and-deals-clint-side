// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhuEXhVexosV2QZD79dVjC3Hbxl4I2-o",
  authDomain: "wheels-and-deals-4f2d3.firebaseapp.com",
  projectId: "wheels-and-deals-4f2d3",
  storageBucket: "wheels-and-deals-4f2d3.appspot.com",
  messagingSenderId: "872478766768",
  appId: "1:872478766768:web:dc7e30d2e89822c80fad75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app