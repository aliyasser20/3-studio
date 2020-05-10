import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

// eslint-disable-next-line
import SwipePictures from "../SwipePictures/SwipePictures";

import "./PictureViewer.scss";

const PictureViewer = props => (
  <div className="picture-viewer">
    <Dialog
      classes={{ root: "picture-viewer-dialog" }}
      fullWidth={false}
      maxWidth="lg"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent>
        <SwipePictures pictures={props.pictures} />
      </DialogContent>
    </Dialog>
  </div>
);

PictureViewer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
};

export default PictureViewer;
