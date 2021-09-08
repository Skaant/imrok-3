function dataQuery(graphql) {
  return graphql(`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            title
            slug
            tags
          }
        }
      }
    }
  `);
}

module.exports = dataQuery;
