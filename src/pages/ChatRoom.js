import { useEffect, useState } from "react";
import { Timestamp } from "../util/datetime";
import { db } from "../config/firestore";

import { auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { IconSend } from "../icons/icons";

import MessageItem from "../compenents/MessageItem";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../App.css";

const messageDefault = { message: "", from: "" };

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(messageDefault);

  // Get the Logged in User
  const [user] = useAuthState(auth);

  useEffect(() => {
    listenForMessages();
  }, []);

  const listenForMessages = () => {
    const ref = db.collection("messages");

    // query for messages from the last 7 days order by oldest first
    const query = ref.orderBy("time_stamp", "asc").limitToLast(25);

    // set up listener
    query.onSnapshot(
      (docSnapshot) => {
        const allMessages = [];
        docSnapshot.docs.forEach((doc) => {
          // add the document id to the document data
          const data = doc.data();
          data.id = doc.id;
          allMessages.push(data);

          setMessages(allMessages);
        });

        const now = new Date();
        setStatus(`Updated ${now.toLocaleTimeString()}`);
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const MessageList = ({ onUpdate }) => {
    return (
      messages &&
      messages.map((message) => (
        <MessageItem key={message.id} message={message} onUpdate={onUpdate} />
      ))
    );
  };

  const setDisplayMessage = (text) => {
    //toast(text);
  };

  const onSubmitMessage = (form) => {
    form.preventDefault(); // <- prevent form submit from reloading the page

    // is there a valid message to send?
    if (!message.message) {
      setDisplayMessage("Enter a message dumb ass!");
      return;
    }

    const reactions = [];

    /* Send the message to Firebase */
    const messageInfo = {
      ...message,
      time_stamp: Timestamp(),
      from: user.displayName,
      reactions: reactions,
    };

    const ref = db.collection("messages");
    ref.add(messageInfo);

    // Clear the Message
    setDisplayMessage("Message Successfully Posted");
    setMessage(messageDefault);
  };

  return (
    <>
      <div id="message-list-container">
        <div id="message-list">
          <MessageList onUpdate={toast} />
        </div>
        <div className="message-form">
          <form onSubmit={onSubmitMessage}>
            <input
              type="text"
              name="message"
              className="message-input"
              onChange={handleInputChange}
              value={message.message}
              placeholder="Type a message ..."
            />

            <button type="submit">
              <IconSend />
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  );
};

export default ChatRoom;
