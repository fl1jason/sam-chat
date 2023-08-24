import { auth } from "./config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import Layout from "./compenents/Layout";

import "./App.css";

const App = () => {
  const [user] = useAuthState(auth);

  return <Layout>{user ? <ChatRoom /> : <Login />}</Layout>;
};

export default App;
