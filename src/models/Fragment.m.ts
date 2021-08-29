type FragmentM = {
  id: string;
  frontmatter: {
    slug: string;
    title: string;
    tags: string[];
  };
  body: string;
};

export default FragmentM;
