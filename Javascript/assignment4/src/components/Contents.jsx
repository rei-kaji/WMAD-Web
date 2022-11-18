import React from "react";
import { useState } from "react";
import ContentsItem from "./ContentsItem";

const over_big = require("../assets/over_big.png");

const Contents = () => {
  //   const [hovered, setHovered] = useState(false);
  return (
    <>
      {ContentsItem.map(({ icon, title, description, images }) => {
        return (
          <div className="content" key={title} id={title}>
            <div className="titleArea">
              {icon && <img src={icon} alt={icon} className="icon" />}
              <h2>{title}</h2>
            </div>
            <p>{description}</p>
            {images &&
              images.map((image) => {
                return (
                  <img
                    src={image}
                    alt={image}
                    key={image}
                    className="weatherImage"
                  />
                );
              })}
          </div>
        );
      })}
    </>
  );
};

export default Contents;
