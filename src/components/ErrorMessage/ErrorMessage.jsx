import React from "react";

const ErrorMessage = ({ message }) => (
  <div className={styles["error-message"]}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
