import React from "react";
import PropTypes from "prop-types";
import MediaCanvas from "./MegiaCanvas/MediaCanvas";
import { Button } from "@material-ui/core";
const Media = (props) => {
  return (
    <>
      <MediaCanvas />
      <Button>screenshot</Button>
      <Button>gif</Button>
    </>
  );
};

Media.propTypes = {};

export default Media;
