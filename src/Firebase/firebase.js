import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDj8j0iMFz2ZY1kElxRqXhKD4QT0mRFjA4",
  authDomain: "e-commerce-jimenezoutlet.firebaseapp.com",
  projectId: "e-commerce-jimenezoutlet",
  storageBucket: "e-commerce-jimenezoutlet.appspot.com",
  messagingSenderId: "196138922339",
  appId: "1:196138922339:web:b5f415b6403cea5e08e356"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


