import React from "react";

import { auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";

import Avatar from "../compenents/Avatar";

import { IconMenu } from "../icons/icons";

const Header = () => {
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
          <div className="header-name">
            <Avatar userName={user.displayName} />
            <div>{user.displayName}</div>
          </div>
          <div className="header-options">
            <a href="#" onClick={logOut}>
              <IconMenu />
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
