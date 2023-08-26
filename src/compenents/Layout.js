import React, { useState } from "react";

import Header from "./Header";
import DrawerMenu from "./DrawerMenu";

const Layout = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main>
      <Header onMenu={setDrawerOpen} />
      <DrawerMenu isOpen={drawerOpen} onOpenDrawer={setDrawerOpen} />
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
