import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBSd1kXFtarKOb44tFuh589W9r0sxQizuA",
  authDomain: "su20-ff4c5.firebaseapp.com",
  databaseURL: "https://su20-ff4c5.firebaseio.com",
  projectId: "su20-ff4c5",
  storageBucket: "su20-ff4c5.appspot.com",
  messagingSenderId: "113898032348",
  appId: "1:113898032348:web:cb6ae176d6f9fae3963819",
  measurementId: "G-0QLFWDBNBM"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
