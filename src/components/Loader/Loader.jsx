import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className={styles["loader-container"]}>
    <Oval height={50} width={50} color="#007bff" />
  </div>
);

export default Loader;
