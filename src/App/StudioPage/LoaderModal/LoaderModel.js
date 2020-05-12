import React from "react";
import PropTypes from "prop-types";

import { Dialog, DialogContent } from "@material-ui/core";

import Loader from "../../UI/Loader/Loader";

const LoaderModel = props => (
  <div>
    <Dialog
      classes={{ root: "picture-viewer-dialog" }}
      fullWidth={false}
      maxWidth="lg"
      open
      aria-labelledby="picture"
    >
      <DialogContent>
        <Loader />
      </DialogContent>
    </Dialog>
  </div>
);

LoaderModel.propTypes = {};

export default LoaderModel;
