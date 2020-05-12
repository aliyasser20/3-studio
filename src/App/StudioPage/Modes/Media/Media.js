import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Snackbar } from "@material-ui/core";
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
import {
  createImage,
  screeshotDownload,
  saveToCloud,
} from "./screenshotsHelpers/screenshotsHandler";
import Alert from "../../../UI/Alert/Alert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Media = (props) => {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState(false);
  const [severity, setSeverity] = useState("");
  const [screenshot, setScreenshot] = useState();
  const [previewElement, setPreviewElement] = useState();

  const closeSnackbar = () => {
    setSnackbar(false);
    setSeverity("");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const snackbarSet = (severity, message) => {
    setSeverity(severity);
    setSnackMessage(message);
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
    // handleCounter()
    const preview = createImage();
    setScreenshot(preview);
  };
  const handleDownload = () => {
    screeshotDownload(screenshot, { name: "testProject", id: 85 }, 19);
  };

  const handleSave = () => {
    saveToCloud(screenshot, { name: "testProject", id: 777 }, 19).then(
      (res) => {
        res.status === 200
          ? snackbarSet("success", "Screenshot saved.")
          : snackbarSet("error", "Error, screenshot not saved.");
        setSnackbar(true);
        setOpen(false);
      }
    );
  };

  const handleRecord = () => {
    const exportVid = (blob) => {
      const preview = document.querySelector("#preview-video");

      const vid = document.createElement("video");
      vid.style.width = "100%";
      vid.style.height = "70%";
      vid.src = URL.createObjectURL(blob);
      vid.controls = true;
      preview.appendChild(vid);
      // const a = document.createElement("a");
      // a.download = "myvid.webm";
      // a.href = vid.src;
      // a.textContent = "download the video";
      // document.body.appendChild(a);
    };

    const startRecording = (canvas) => {
      const chunks = []; // here we will store our recorded media chunks (Blobs);
      const stream = canvas.captureStream(); // grab our canvas MediaStream;
      const rec = new MediaRecorder(stream); // every time the recorder has new data, we will store it in our array

      rec.ondataavailable = (e) => chunks.push(e.data);
      rec.onstop = (e) => {
        exportVid(new Blob(chunks, { type: "video/mp4" }));
        setOpen(true);
      };

      rec.start();
      setTimeout(() => rec.stop(), 10000);
    };
    const canvas = document.querySelector("canvas");
    startRecording(canvas);
    // console.log("ok")
    // capturer.start();
    // setTimeout(() => {
    //   capturer.stop();
    //   capturer.save(blob => {
    //     const a = document.createElement("a");
    //     document.body.appendChild(a);
    //     a.style = "display: none";
    //     const url = URL.createObjectURL(blob);
    //     window.open(url);
    //     a.herf = url;
    //     a.download = "newGif";
    //     a.click();
    //   });
    // }, 5000);
  };

  return (
    <>
      {/* <Testing /> */}
      <MediaCanvas />
      <Button onClick={(e) => handleScreenshot()}>Screenshot</Button>
      <Button onClick={(e) => handleRecord()}>Record</Button>
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
          <img
            id="preview-img"
            src=""
            alt="preview-img"
            style={{ display: "none" }}
          />
          <div id="preview-video"></div>
        </DialogContent>
        <DialogActions>
          {screenshot && (
            <>
              <Button onClick={handleClose} color="primary" variant="contained">
                Cancel
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={(e) => handleDownload()}
              >
                Download
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={(e) => handleSave()}
              >
                Save
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity={severity}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

Media.propTypes = {};

export default Media;
