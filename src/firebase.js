import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
require("firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyDphBhzEFKYuAIav4vDgHyFEUDy2ADhgTk",
    authDomain: "amuroboclub-react.firebaseapp.com",
    projectId: "amuroboclub-react",
    storageBucket: "amuroboclub-react.appspot.com",
    messagingSenderId: "60714024010",
    appId: "1:60714024010:web:c3fb61765be2f49e6ebab3",
    measurementId: "G-F8Z1ZB7DX9"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export { auth, db, storage };






