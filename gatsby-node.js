exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const { slug } = node.frontmatter;
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articlesQuery = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "article" } } }) {
        nodes {
          body
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  articlesQuery.data.allMdx.nodes.forEach((node) => {
    const { body, frontmatter } = node;
    const { slug } = frontmatter;
    createPage({
      path: `blog/${slug}`,
      component: require.resolve("./src/templates/article.tsx"),
      context: {
        slug,
        body,
      },
    });
  });
  const tagsQuery = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);
  const tags = tagsQuery.data.allMdx.nodes.reduce((acc, item) => {
    const itemTags = item.frontmatter.tags;
    if (itemTags) {
      itemTags.forEach((tag) => {
        if (!acc.includes[tag]) {
          acc.push(tag);
        }
      });
    }
    return acc;
  }, []);
  tags.forEach(async (tag) => {
    const fragmentsQuery = await graphql(`
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
    createPage({
      path: `tags/${tag}`,
      component: require.resolve("./src/templates/tag.tsx"),
      context: {
        tag,
        fragments: fragmentsQuery.data.allMdx.nodes,
      },
    });
  });
};
