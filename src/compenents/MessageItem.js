import React, { useState } from "react";

import { db, auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { TimeFromNow } from "../util/datetime";

import { IconReactions } from "../icons/icons";

const MessageItem = (props) => {
  const { id, from, message, time_stamp, reactions } = props.message;

  const [showReactions, setShowReactions] = useState(false);

  const timeFromNow = TimeFromNow(time_stamp);

  // Get the Logged in User
  const [user] = useAuthState(auth);

  const handleReaction = (reaction) => {
    const ref = db.collection("messages");
    // get the document
    const docRef = ref.doc(id);

    const newReaction = {
      type: reaction,
      user: user.displayName,
    };

    // update the document
    docRef.update({
      reactions: [...reactions, newReaction],
    });
  };

  return (
    <div
      key={id}
      className={`message-container${user.displayName === from ? "-me" : ""}`}
    >
      <div className={`message${user.displayName === from ? "-me" : ""}`}>
        <div className="message-left">
          <div className="message-from">{from}</div>
          <div className="message-text">{message}</div>
        </div>
        <div className="message-right">
          <div className="message-time">{timeFromNow}</div>
        </div>
      </div>
      <div
        className="message-reaction-options"
        onClick={() => setShowReactions(!showReactions)}
      >
        <IconReactions />
      </div>
      <div
        className={
          showReactions
            ? "message-reaction-buttons show"
            : "message-reaction-buttons"
        }
        onMouseLeave={() => setShowReactions(false)}
      >
        <button onClick={() => handleReaction("💜")}>💜</button>
        <button onClick={() => handleReaction("🐈")}>🐈</button>
        <button onClick={() => handleReaction("🍺")}>🍺</button>
        <button onClick={() => handleReaction("💩")}>💩</button>
        <button onClick={() => handleReaction("😴")}>😴</button>
      </div>
      <div>
        <div className="message-reactions">
          {reactions &&
            reactions.map((reaction, index) => (
              <span key={index} className="tooltip">
                {reaction.type}
                <span className="tooltiptext">{reaction.user}</span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
