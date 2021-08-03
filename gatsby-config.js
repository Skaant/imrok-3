module.exports = {
  siteMetadata: {
    siteUrl: "https://imrok.fr",
    title: "imrok-3",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_data`,
        name: "instances",
      }
    },
    "gatsby-plugin-mdx-frontmatter",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass"
  ],
};
