import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0ZaqvaC7Z4X-KRgprlGck2z1Ao1350Vg",
    authDomain: "react-todo-c0e8f.firebaseapp.com",
    projectId: "react-todo-c0e8f",
    storageBucket: "react-todo-c0e8f.appspot.com",
    messagingSenderId: "778051944929",
    appId: "1:778051944929:web:8670443d37dd69007cd2a0"
  };

const app = initializeApp(firebaseConfig);

export { getAuth, createUserWithEmailAndPassword };
