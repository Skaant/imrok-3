const dataQuery = require("./queries/data.query");
const homeHighlightsQuery = require("./queries/homeHighlights.query");
const tagFragmentsQuery = require("./queries/tagFragments.query");
const tagsDetailsQuery = require("./queries/tagsDetails.query");
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
  /** TAGS LIST PAGES */
  const tagsDetails = await Promise.all(
    tags.map((tag) => tagsDetailsQuery(graphql, tag))
  );
  const tagsFragments = await Promise.all(
    tags.map((tag) => tagFragmentsQuery(graphql, tag))
  );
  tags.forEach((tag, index) => {
    console.log(tagsDetails[index], tag);
    return createPage({
      path: `tags/${tag}`,
      component: require.resolve("../src/templates/tag.tsx"),
      context: {
        tag,
        details: tagsDetails[index].data.mdx,
        tagsAndCount,
        fragments: tagsFragments[index].data.allMdx.nodes,
      },
    });
  });
}

module.exports = renderer;
