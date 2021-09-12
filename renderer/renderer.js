const dataQuery = require("./queries/data.query");
const homeHighlightsQuery = require("./queries/homeHighlights.query");
const tagFragmentQuery = require("./queries/tagFragments.query");
const getTagsAndCount = require("./_helpers/getTagsAndCount");

async function renderer({ graphql, createPage }) {
  const { nodes } = (await dataQuery(graphql)).data.allMdx;
  const tagsAndCount = getTagsAndCount(nodes);
  const tags = Object.keys(tagsAndCount);
  /** HOME PAGE */
  const { nodes: highlights } = (
    await homeHighlightsQuery(graphql, ["fragments/2", "fragments/3"])
  ).data.allMdx;
  createPage({
    path: "/",
    component: require.resolve("../src/templates/home.tsx"),
    context: {
      tagsAndCount,
      highlights,
    },
  });
  /** TAGS PAGE */
  const tagsFragments = await Promise.all(
    tags.map((tag) => tagFragmentQuery(graphql, tag))
  );
  tags.forEach((tag, index) =>
    createPage({
      path: `tags/${tag}`,
      component: require.resolve("../src/templates/tag.tsx"),
      context: {
        tag,
        tagsAndCount,
        fragments: tagsFragments[index].data.allMdx.nodes,
      },
    })
  );
}

module.exports = renderer;
