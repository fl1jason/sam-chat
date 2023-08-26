import React from "react";

import { getUserColor } from "../util/user";

const Avatar = (userName) => {
  // if the UserName is two words, get the first letter of each word
  // otherwise, get the first two letters of the UserName
  const getInitials = ({ userName }) => {
    const nameArray = userName.split(" ");
    if (nameArray.length > 1) {
      return nameArray[0].charAt(0) + nameArray[1].charAt(0);
    } else {
      return userName.substring(0, 2);
    }
  };

  const userInitials = getInitials(userName);
  const userColor = getUserColor(userName.userName);

  console.log(userName);

  return (
    <div className="avatar" style={{ backgroundColor: userColor }}>
      {userInitials}
    </div>
  );
};

export default Avatar;
