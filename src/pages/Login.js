import { auth, googleProvider, githubProvider } from "../config/firestore";
import { signInWithPopup } from "firebase/auth";

// import login images from the assets folder
import loginGitHub from "../assets/github.png";
import loginGoogle from "../assets/google.png";
import logo from "../assets/logo.png";

export const Login = () => {
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

  return (
    <div className="login-container">
      <div id="login-box">
        <img src={logo} className="login-logo" alt="Sammon Chat" />
        <h1>Sammon Chat</h1>
        <div className="login-button" onClick={signInWithGithub}>
          <img
            src={loginGitHub}
            className="login-img"
            alt="login with google"
          />
          <button>Signin with GitHub</button>
        </div>
        <div className="login-button" onClick={signInWithGoogle}>
          <img
            src={loginGoogle}
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
