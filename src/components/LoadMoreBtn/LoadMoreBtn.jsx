import React from "react";
import "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className="load-more" onClick={onLoadMore}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
