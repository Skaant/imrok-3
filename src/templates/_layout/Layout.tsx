import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

function Layout({
  title,
  description,
  tags,
  children,
}: {
  title?: string;
  description?: string;
  tags?: string[];
  children: ReactElement;
}) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title ? title + " - " : ""}
          {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <div id="content" className="container-fluid bg-primary text-light">
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default Layout;
