import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
// import CCapture from "ccapture.js/src/CCapture";
import { useThree } from "react-three-fiber";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Testing from "./Testing";
import MediaCanvas from "./MediaCanvas/MediaCanvas";
import cloudinaryAxios from "../../../../axiosInstances/cloudinaryAxios";
import { createImage } from "./screenshotsHelpers/screenshotsHandler";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Media = (props) => {
  const [open, setOpen] = React.useState(false);
  const [screenshot, setScreenshot] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const capturer = new CCapture({
  //   format: "gif",
  //   workersPath: "workers/",
  //   framerate: 20,
  //   verbose: true
  // });

  const { gl, scene, camera } = useThree();

  const handleScreenshot = () => {
    setOpen(true);
    const preview = createImage();
    setScreenshot(preview)
    // console.log("link", document.querySelector("#download-link").href);
    // console.log(screenshot);
  };
  // const handleGif = () => {
  //   // console.log("ok")
  //   capturer.start();
  //   setTimeout(() => {
  //     capturer.stop();
  //     capturer.save(blob => {
  //       const a = document.createElement("a");
  //       document.body.appendChild(a);
  //       a.style = "display: none";
  //       const url = URL.createObjectURL(blob);
  //       window.open(url);
  //       a.herf = url;
  //       a.download = "newGif";
  //       a.click();
  //     });
  //   }, 5000);
  // };

  return (
    <>
      {/* <Testing /> */}
      <MediaCanvas />
      <Button onClick={(e) => handleScreenshot()}>screenshot</Button>
      {/* <Button onClick={e => handleGif()}>gif</Button> */}
      <Dialog
        classes={{ root: "screenshot-preview" }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <img id="preview-img" src="" alt="preview-img" />
          {/* <a class=""id="download-link" type="button" href="" download="test">
            Download
          </a> */}
          <Button>Cancel</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button color="primary" variant="contained" onClick={e => handleDownload()}>
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Media.propTypes = {};

export default Media;
