import React from "react";
import "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img
        className="modal-content"
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <div className="caption">{image.alt_description}</div>
    </div>
  );
};
export default ImageModal;
