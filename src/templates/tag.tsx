import React from "react";
import Layout from "./_layout/Layout";
import "../sass/global.scss";
import FragmentM from "../models/Fragment.m";
import FragmentCard from "../components/FragmentCard";
import "../sass/tag.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";

function TagTemplate(props) {
  const { tag, details, fragments, tagsAndCount } = props.pageContext;
  return (
    <Layout pageId={`tag-${tag}`}>
      <>
        <div className="row justify-content-around bg-light text-dark pt-5 pb-3">
          <div className="col-12 col-md-10 col-xl-8">
            <h1>{details ? details.frontmatter.title : tag}</h1>
            <div className="paragraph-md paragraph-md-lg mb-0 mb-md-3 text-uppercase d-flex align-items-start">
              {details && (
                <span className="badge-lg badge-primary rounded-pill me-2 px-3 py-1">
                  {tag}
                </span>
              )}
              Terme et contenu associé
            </div>
            {details && <a href="#list">Accès à la liste</a>}
          </div>
        </div>
        {details && (
          <div className="row pb-5 bg-light justify-content-around">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="card bg-primary shadow">
                <div className="card-body">
                  <MDXRenderer>{details.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          id="list"
          className="row justify-content-around bg-dark text-light pt-5"
        >
          <div className="col-12 col-md-10 col-xl-8">
            <h2>Liste des fragments associés au mot-clé</h2>
          </div>
        </div>
        {(fragments as FragmentM[]).map((fragment) => (
          <div className="row justify-content-around bg-dark py-5">
            <div className="col-12 col-md-6 col-xl-4">
              <FragmentCard {...fragment} />
            </div>
          </div>
        ))}
      </>
    </Layout>
  );
}

export default TagTemplate;
