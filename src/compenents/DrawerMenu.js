import { signOut } from "firebase/auth";

import { auth } from "../config/firestore";

import { IconLogOut } from "../icons/icons";

const DrawerMenu = ({ isOpen, onOpenDrawer }) => {
  const logOut = async () => {
    // Close the drawer menu then log out
    onOpenDrawer(false);
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      id="drawer-menu"
      className="drawer-menu"
      style={{ width: isOpen ? "250px" : 0 }}
    >
      <a
        href="javascript:void(0)"
        className="closebtn"
        onClick={() => onOpenDrawer(false)}
      >
        &times;
      </a>
      <div className="drawer-menu-options">
        <div className="drawer-menu-item" onClick={logOut}>
          <div>
            <IconLogOut />
          </div>
          <div className="drawer-menu-item-link">Sign Out</div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
