import React from "react";

import { auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";

import Avatar from "../compenents/Avatar";

import { IconMenu } from "../icons/icons";

const Header = ({ onMenu }) => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      {user && (
        <>
          <div className="header-options">
            <a href="#" onClick={() => onMenu(true)}>
              <IconMenu />
            </a>
          </div>
          <div className="header-name">
            <div>{user.displayName}</div>
            <Avatar userName={user.displayName} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
