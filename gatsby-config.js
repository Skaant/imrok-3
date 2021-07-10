module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "imrok-3",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_data/articles`,
        name: "articles",
      }
    },
    "gatsby-plugin-mdx-frontmatter",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass"
  ],
};
