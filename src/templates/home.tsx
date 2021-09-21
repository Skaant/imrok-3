import React from "react";
import Layout from "./_layout/Layout";
import FragmentCard from "../components/FragmentCard";
import "../sass/home.scss";

function HomePage(props) {
  const { tagsAndCount, highlights } = props.pageContext;
  return (
    <Layout pageId="home">
      <>
        <h1 className="text-center">IMROK</h1>
        <p className="col-12 text-center mb-5">L'imagination est la voie !</p>
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 col-xl-4">
            <FragmentCard {...highlights[0]} />
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-12 col-md-10 col-xl-8 text-display">
            <h2>Mon hub créatif</h2>
            <p>Bonjour, je m'appelle Romaric Ruga.</p>
            <p>
              Sur ce site je rassemble du contenu et des liens vers du contenu
              créatif.
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 col-xl-4">
            <FragmentCard {...highlights[1]} />
          </div>
        </div>
      </>
    </Layout>
  );
}

export default HomePage;
