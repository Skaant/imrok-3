exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const { slug } = node.frontmatter
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articles = await graphql(`
    query {
      allMdx(filter: {frontmatter: { type: { eq: "article" }}}) {
        nodes {
          body
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  articles.data.allMdx.nodes.forEach(node => {
    const { body, frontmatter } = node
    const { slug } = frontmatter
    createPage({
      path: `blog/${ slug }`,
      component: require.resolve('./src/templates/article.tsx'),
      context: {
        slug,
        body
      },
    })  
  })
}