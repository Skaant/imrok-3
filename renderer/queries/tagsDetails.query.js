function tagsDetailsQuery(graphql, tag) {
  return graphql(`
    query {
      mdx(slug: {eq: "tags/${tag}"}) {
        frontmatter {
          title
        }
        body
      }
    }
  `);
}

module.exports = tagsDetailsQuery;
