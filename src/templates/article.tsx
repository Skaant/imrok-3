import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import "../sass/global.scss";
import Layout from "./_layout";

function ArticleTemplate(props) {
  const { body, slug } = props.pageContext;
  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default ArticleTemplate;
