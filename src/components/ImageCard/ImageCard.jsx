import React from "react";
import "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={styles["image-card"]}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Gallery Image"}
        className={styles["gallery-image"]}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
