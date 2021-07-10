import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import '../sass/global.scss'

function ArticleTemplate(props) {
  const { body, slug } = props.pageContext
  return <div className="container">
    <MDXRenderer>{body}</MDXRenderer>
  </div>
}

export default ArticleTemplate