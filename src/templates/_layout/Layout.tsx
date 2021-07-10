import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IMROK</title>
      </Helmet>
      <Navbar />
      <div id="content" className="container-fluid">
        {children}
      </div>
    </>
  );
}

export default Layout;
