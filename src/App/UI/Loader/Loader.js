import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import "./Loader.scss";

const Loader = () => (
  <div className="loader">
    <CircularProgress size={65} />
  </div>
);

export default Loader;
