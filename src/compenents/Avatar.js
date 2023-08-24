import React from "react";

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

  return <div className="avatar">{getInitials(userName)}</div>;
};

export default Avatar;
