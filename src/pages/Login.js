import { auth, googleProvider, githubProvider } from "../config/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// import login images from the assets folder
import loginGitHub from "../assets/github.png";
import loginGoogle from "../assets/google.png";

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
    <div className="login-container">
      <div id="login-box">
        <h1>Login</h1>
        <div className="login-button" onClick={signInWithGithub}>
          <img
            src={loginGoogle}
            className="login-img"
            alt="login with google"
          />
          <button>Signin with GitHub</button>
        </div>
        <div className="login-button" onClick={signInWithGoogle}>
          <img
            src={loginGitHub}
            className="login-img"
            alt="login with github"
          />
          <button>Signin with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
