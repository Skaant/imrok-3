import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import FragmentM from "../models/Fragment.m";

function FragmentCard({ frontmatter: { title, tags }, body }: FragmentM) {
  return (
    <div className="card fragment-card text-dark">
      <div className="card-header">
        <div className="d-flex justify-content-end">
          {tags.map((tag) => (
            <div className="badge bg-primary rounded-pill ms-2">{tag}</div>
          ))}
        </div>
        <h2 className="marker my-4">{title}</h2>
      </div>
      <div className="card-body">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
}

export default FragmentCard;
