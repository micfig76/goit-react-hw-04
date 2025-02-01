import React from "react";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={styles["load-more"]} onClick={onLoadMore}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
