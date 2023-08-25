import { auth, googleProvider, githubProvider } from "../config/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Login = () => {
  const signInWithEmail = async () => {
    try {
      //await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-box">
      <button onClick={signInWithGithub}> Signin with GitHub</button>
      <button onClick={signInWithGoogle}> Signin with Google</button>
      <button onClick={logOut}> logOut</button>
    </div>
  );
};

export default Login;
