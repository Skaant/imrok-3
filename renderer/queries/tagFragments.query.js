function tagFragmentQuery(graphql, tag) {
  return graphql(`
    query {
      allMdx(filter: {frontmatter: {tags: {eq: "${tag}"}}}) {
        nodes {
          frontmatter {
            date
            tags
            title
          }
          body
        }
      }
    }
  `);
}

module.exports = tagFragmentQuery;
