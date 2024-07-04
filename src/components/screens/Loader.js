import { FaSpinner } from "react-icons/fa";
import React from "react";

function Loader() {
  return <div className="loadingDiv">
    <FaSpinner className="loading"/>
  </div>;
}

export default Loader;
