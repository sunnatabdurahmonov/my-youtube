import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDBHnqHA_abDdNRqAb5zP5N2qR-v9mWH5Q",
  authDomain: "my-23f15.firebaseapp.com",
  projectId: "my-23f15",
  storageBucket: "my-23f15.appspot.com",
  messagingSenderId: "187033779618",
  appId: "1:187033779618:web:1965d76cdc7cea6086c6fb",
  measurementId: "G-Z09531CLLX"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
