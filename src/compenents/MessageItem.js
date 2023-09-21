import React, { useState } from "react";

import { db, auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { TimeFromNow } from "../util/datetime";

import { IconReactions } from "../icons/icons";

import { getUserColor } from "../util/user";

import reactionTypes from "../data/reactions";

const MessageItem = (props) => {
  const { id, from, message, time_stamp, reactions } = props.message;

  const [showReactions, setShowReactions] = useState(false);

  const timeFromNow = TimeFromNow(time_stamp);

  // Pick a unique color for the user
  const userColor = getUserColor(from);
  console.log(userColor);

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
    <>
      <div
        key={id}
        className={`message-container${user.displayName === from ? "-me" : ""}`}
      >
        <div className={`message${user.displayName === from ? "-me" : ""}`}>
          <div className="message-left">
            {user.displayName !== from && (
              <div className="message-from" style={{ color: userColor }}>
                {from}
              </div>
            )}
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
          {reactionTypes.map((type, index) => (
            <button id={index} onClick={() => handleReaction(type)}>
              {type}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`message-reactions${user.displayName === from ? "-me" : ""}`}
      >
        {reactions &&
          reactions.map((reaction, index) => (
            <span key={index} className="tooltip">
              {reaction.type}
              <span
                className={`tooltiptext${
                  user.displayName === from ? "-me" : ""
                }`}
              >
                {reaction.user}
              </span>
            </span>
          ))}
      </div>
    </>
  );
};

export default MessageItem;
