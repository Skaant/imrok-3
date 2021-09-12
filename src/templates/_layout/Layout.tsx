import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import TagsAndCount from "../_models/TagsAndCount.type";
import Navbar from "./Navbar";

function Layout({
  pageId,
  title,
  description,
  tags,
  data,
  children,
}: {
  pageId?: string;
  title?: string;
  description?: string;
  tags?: string[];
  data?: {
    tagsAndCount?: TagsAndCount;
  };
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
        <Navbar tagsAndCount={data.tagsAndCount} />
        {children}
      </main>
    </>
  );
}

export default Layout;
