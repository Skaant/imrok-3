import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IMROK</title>
      </Helmet>
      <div id="content" className="container-fluid">
        {children}
      </div>
    </>
  );
}

export default Layout;
