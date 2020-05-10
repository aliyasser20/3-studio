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

import SwipePictures from "../SwipePictures/SwipePictures";

const PictureViewer = props => (
  <div className="picture-viewer">
    <Dialog
      fullWidth={false}
      maxWidth="lg"
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText> */}
        <SwipePictures pictures={props.pictures} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

PictureViewer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired
};

export default PictureViewer;
