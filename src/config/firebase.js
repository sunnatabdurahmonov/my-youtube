import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2CrytABK1gbSZV14DsdP29GZAHy5iOAQ",
  authDomain: "you-tube-2-6e6d6.firebaseapp.com",
  projectId: "you-tube-2-6e6d6",
  storageBucket: "you-tube-2-6e6d6.appspot.com",
  messagingSenderId: "610930979112",
  appId: "1:610930979112:web:e82524796fa3fd0d13e01d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)