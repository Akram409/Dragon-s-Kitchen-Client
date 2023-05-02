// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWRtlk5iA0tso3LHy3XBdKsZlAlfaqY4",
  authDomain: "dragon-s-kitchen.firebaseapp.com",
  projectId: "dragon-s-kitchen",
  storageBucket: "dragon-s-kitchen.appspot.com",
  messagingSenderId: "84450695950",
  appId: "1:84450695950:web:19a8f651d3ee892338155f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app