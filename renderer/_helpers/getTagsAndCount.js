function getTagsAndCount(nodes) {
  return nodes.reduce((acc, node) => {
    const { tags } = node.frontmatter;
    if (tags) {
      tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = 0;
        }
        acc[tag]++;
      });
    }
    return acc;
  }, {});
}

module.exports = getTagsAndCount;
