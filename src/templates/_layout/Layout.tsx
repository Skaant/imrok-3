import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

function Layout({
  pageId,
  title,
  children,
}: {
  pageId?: string;
  title?: string;
  description?: string;
  tags?: string[];
  children: ReactElement;
}) {
  const titleQuery = useStaticQuery(graphql`
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
          {titleQuery.site.siteMetadata.title}
        </title>
      </Helmet>
      <main
        id={pageId ? `page-${pageId}` : "content"}
        className="container-fluid bg-primary text-light"
      >
        <Navbar />
        {children}
      </main>
    </>
  );
}

export default Layout;
