import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import DocumentTitle from "react-document-title";
import { LoadingSpinner } from "../../components/loadingSpinner/loadingSpinner";

import {GreetingsText} from '../../components/greetingsText/greetingsText'
import "./Home.css";
import images from "../../data";


const Home = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  useEffect(() => {
    window.addEventListener("load", () => {
      const image = document.querySelector("img");
      const isLoaded = image.complete && image.naturalHeight !== 0;
      setLoaded(true);
    });
  });

  return (
    <DocumentTitle title="MadInArt | Home">
      <div className="App">    
      <GreetingsText/>
        <div className="tags">
          <TagButton
            name="All"
            tagActive={tag === "All"}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Cartoon characters"
            tagActive={tag === "Cartoon characters"}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Digital portraits"
            tagActive={tag === "Digital portraits"}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Vector portraits"
            tagActive={tag === "Vector portraits"}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Posters"
            tagActive={tag === "Posters"}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Game design"
            tagActive={tag === "Game design"}
            handleSetTag={setTag}
          />{" "}
        </div>
        <SRLWrapper>
          <div
            className="container"
            style={{ display: loaded ? "block" : "none" }}
          >
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <a href={`/images/${image.imageName}`}>
                  <img
                    className="image"
                    src={`/images/${image.imageName}`}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
          {!loaded && <LoadingSpinner />}
        </SRLWrapper>
      </div>
    </DocumentTitle>
  );
};
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Home;
