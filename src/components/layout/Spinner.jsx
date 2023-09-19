import React from "react";
import spinner from "./spinning-loading.gif";

const Spinner = () => (
  <div className="container">
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </div>
);

export default Spinner;
