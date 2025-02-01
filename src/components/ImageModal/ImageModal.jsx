import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
    >
      <button className={styles["modal-close-btn"]} onClick={onClose}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description || "Image"} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <p>Description: {image.description || "No description available."}</p>
    </Modal>
  );
};

export default ImageModal;
