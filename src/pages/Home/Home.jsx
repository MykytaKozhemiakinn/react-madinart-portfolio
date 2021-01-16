import React, { useEffect, useState } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import DocumentTitle from "react-document-title";

import images from "../../data";
import "./Home.css";
import s from "./home.module.css";

const Home = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <DocumentTitle title="MadInArt | Home">
      <SimpleReactLightbox>
        <div className="App">
          <p className="greetings">
            Hello, I’m a <span>digital artist</span>, with over 3 years of
            experience
          </p>
          <div className="tags">
            <TagButton
              name="All"
              tagActive={tag === "All" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Cartoon characters"
              tagActive={tag === "Cartoon characters" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Digital portraits"
              tagActive={tag === "Digital portraits" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Vector portraits"
              tagActive={tag === "Vector portraits" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Posters"
              tagActive={tag === "Posters" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Game design"
              tagActive={tag === "Game design" ? true : false}
              handleSetTag={setTag}
            />{" "}
          </div>
          <SRLWrapper>
            {/* options={options} could be added to customize gallery */}
            <div className="container">
              {filteredImages.map((image) => (
                <a href={`/images/${image.imageName}`}>
                  <div className="image"></div>
                  <img src={`/images/${image.imageName}`} alt="" />
                </a>
              ))}
            </div>
          </SRLWrapper>
        </div>
      </SimpleReactLightbox>
    </DocumentTitle>
  );
};
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </button>
  );
};

export default Home;
