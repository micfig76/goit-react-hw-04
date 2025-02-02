// import React from "react";
// import Modal from "react-modal";
// import styles from "./ImageModal.module.css";

// const ImageModal = ({ isOpen, onClose, image }) => {
//   if (!isOpen || !image) return null;

//   return (
//     <div className={styles["modal-overlay"]} onClick={onClose}>
//       <div
//         className={styles["modal-content"]}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className={styles["modal-close-btn"]} onClick={onClose}>
//           ✖
//         </button>
//         <img
//           src={image.urls.regular}
//           alt={image.alt_description || "Large View"}
//         />
//         <p>{image.description || "No description available."}</p>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles["modal-content"]}
      overlayClassName={styles["modal-overlay"]}
    >
      <button className={styles["modal-close-btn"]} onClick={onClose}>
        ✖
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Large View"}
      />
      <p>{image.description || "No description available."}</p>
    </Modal>
  );
};

export default ImageModal;
