import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBIa6OjVi9MxZypgIDv6cFr4NSgMYe_7BI",
  authDomain: "you-tube-2-64943.firebaseapp.com",
  projectId: "you-tube-2-64943",
  storageBucket: "you-tube-2-64943.appspot.com",
  messagingSenderId: "1000614795879",
  appId: "1:1000614795879:web:2ae65062b2b5701fb152c2",
  measurementId: "G-49WRQYF3K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth =  getAuth(app)
