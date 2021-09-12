import React from "react";
import Layout from "./_layout/Layout";
import "../sass/global.scss";
import FragmentM from "../models/Fragment.m";
import FragmentCard from "../components/FragmentCard";
import "../sass/tag.scss";

function TagTemplate(props) {
  const { tag, fragments, tagsAndCount } = props.pageContext;
  return (
    <Layout pageId={`tag-${tag}`} data={{ tagsAndCount }}>
      <>
        <div className="row justify-content-around">
          <div className="col-12 col-md-10 col-xl-8">
            <p>Terme et contenu associé</p>
            <h1>{tag}</h1>
          </div>
        </div>
        {(fragments as FragmentM[]).map((fragment) => (
          <div className="row justify-content-around">
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
