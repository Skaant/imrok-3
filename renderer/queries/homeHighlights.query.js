/** @param {string[]} slugs These are the root nodes `slug` prop */
function homeHighlightsQuery(graphql, slugs) {
  return graphql(`
    query {
      allMdx(filter: {slug: {in: [${slugs
        .map((slug) => `"${slug}"`)
        .join(", ")}]}}) {
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

module.exports = homeHighlightsQuery;
