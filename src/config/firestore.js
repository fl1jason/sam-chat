import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZoS0UEn8b2_wIqnNZlIQ3D2o1p6wzk7E",
  authDomain: "pizza-pizza-50b70.firebaseapp.com",
  databaseURL: "https://pizza-pizza-50b70.firebaseio.com",
  projectId: "pizza-pizza-50b70",
  storageBucket: "pizza-pizza-50b70.appspot.com",
  messagingSenderId: "10532940493",
  appId: "1:10532940493:web:58b642a3e397056ae8d784",
  measurementId: "G-12RFV8C5Y1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { db, app, auth, googleProvider, githubProvider };
