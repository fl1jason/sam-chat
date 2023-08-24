import React from "react";

import Header from "./Header";

const Layout = (props) => {
  return (
    <main>
      <Header />
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
