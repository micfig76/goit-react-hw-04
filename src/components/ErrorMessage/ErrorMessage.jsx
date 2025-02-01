import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={styles["error-message"]}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
