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
  handleCounter,
} from "./screenshotsHelpers/screenshotsHandler";
import Alert from "../../../UI/Alert/Alert";
import { connect } from "react-redux";
import { useAuth0 } from "../../../../react-auth0-spa";

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
  const [counter, setCounter] = useState(props.currentProject.counter);

  const { user } = useAuth0();

  const closeSnackbar = () => {
    setSeverity("");
    setSnackbar(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const snackbarSet = (type, message) => {
    setSeverity(type);
    setSnackMessage(message);
  };

  const handleScreenshot = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
    setOpen(true);
    // handleCounter()
    const preview = createImage();
    setScreenshot(preview);
  };
  const handleDownload = () => {
    screeshotDownload(screenshot, props.currentProject, counter);
  };

  const handleSave = () => {
    saveToCloud(screenshot, props.currentProject, counter).then((res) => {
      res.status === 200
        ? snackbarSet("success", "Screenshot saved.")
        : snackbarSet("error", "Error, screenshot not saved.");
      setSnackbar(true);
      setOpen(false);
    });
    handleCounter(user.sub, counter, props.currentProject.id).then((res) =>
      console.log(res)
    );
  };
  const handleRecord = () => {
    setScreenshot("");
    const exportVid = (blob) => {
      const preview = document.querySelector("#preview-video");
      const vid = document.createElement("video");
      vid.style.width = "100%";
      vid.style.height = "70%";
      blob.name = "test";
      vid.src = URL.createObjectURL(blob);
      vid.controls = true;
      preview.appendChild(vid);
    };
    const startRecording = (canvas, timer) => {
      const chunks = [];
      const stream = canvas.captureStream();
      const rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => chunks.push(e.data);
      rec.onstop = (e) => {
        setOpen(true);
        exportVid(new Blob(chunks, { type: "video/mp4" }));
      };

      rec.start();
      setTimeout(() => rec.stop(), timer * 1000);
    };
    const canvas = document.querySelector("canvas");
    startRecording(canvas, 10);
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

const mapStateToProps = (state) => ({
  currentProject: state.projects.currentProject,
});

export default connect(mapStateToProps, null)(Media);
