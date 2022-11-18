import React from "react";

const Gallery = ({ imageUrl }) => {
  return (
    <div className="gallery">
      <img src={imageUrl} alt={imageUrl} />
    </div>
  );
};

export default Gallery;
