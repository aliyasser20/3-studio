import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Snackbar } from "@material-ui/core";
import {
  createImage,
  screeshotDownload,
  saveToCloud,
  handleCounter,
} from "../screenshotsHelpers/screenshotsHandler";
import { useAuth0 } from "../../../../../react-auth0-spa";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Alert from "../../../../UI/Alert/Alert";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Timer } from "easytimer.js";

import "./MediaTopNav.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MediaTopNav = (props) => {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState(false);
  const [severity, setSeverity] = useState("");
  const [screenshot, setScreenshot] = useState();
  const [counter, setCounter] = useState(props.currentProject.counter);
  const [recording, setRecording] = useState("");
  const [timeValue, setTimeValue] = useState({ s: 10, ms: 0 });
  const [dots, setDots] = useState(".");
  const [blob, setBlob] = useState();
  const { user } = useAuth0();
  console.log(process.env.REACT_APP_SCREENSHOT_UPLOAD_PRESET);
  const closeSnackbar = () => {
    setSeverity("");
    setSnackbar(false);
  };
  const handleClose = () => {
    setOpen(false);
    const preview = document.querySelector("#preview-video");
    const vid = document.querySelector("video");
    vid && preview.removeChild(vid);
    setScreenshot("");
    URL.revokeObjectURL(blob);
    setBlob(null);
  };
  const snackbarSet = (type, message) => {
    setSeverity(type);
    setSnackMessage(message);
  };

  const handleScreenshot = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
    setOpen(true);
    handleCounter();
    const preview = createImage();
    setScreenshot(preview);
  };
  const handleDownload = () => {
    screeshotDownload(screenshot, props.currentProject, counter);
    setOpen(false);
    setScreenshot("");
  };

  const handleSave = () => {
    saveToCloud(screenshot, props.currentProject, counter).then((res) => {
      res.status === 200
        ? snackbarSet("success", "Screenshot saved.")
        : snackbarSet("error", "Error, screenshot not saved.");
      setSnackbar(true);
      setOpen(false);
      setScreenshot("");
    });
    handleCounter(user.sub, counter, props.currentProject.id).then((res) =>
      console.log(res)
    );
  };
  const handleRecord = () => {
    setScreenshot("");
    const ctx = document.querySelector("canvas");
    const exportVid = (blob) => {
      setBlob(blob);
      const preview = document.querySelector("#preview-video");
      const vid = document.createElement("video");
      vid.style.width = "100%";
      vid.style.height = "70%";
      blob.name = "test";
      vid.src = URL.createObjectURL(blob);
      vid.controls = true;
      preview.appendChild(vid);
    };

    const startRecording = (canvas, timerValue) => {
      setRecording("recording");
      const chunks = [];
      const stream = canvas.captureStream();
      const rec = new MediaRecorder(stream, {
        videoBitsPerSecond: 15000000,
        mimeType: "video/webm;codecs=vp8",
      });
      rec.ondataavailable = (e) => {
        console.log(e);
        chunks.push(e.data);
      };
      rec.onstop = (e) => {
        console.log(stream, rec);
        setOpen(true);
        setRecording("");
        exportVid(new Blob(chunks, { type: "video/mp4" }));
      };
      const timer = new Timer({ target: { seconds: timerValue } });
      timer.start({ precision: "secondTenths" });
      timer.addEventListener("secondTenthsUpdated", (e) => {
        const { secondTenths, seconds } = timer.getTimeValues([
          "seconds",
          "secondTenths",
        ]);
        setTimeValue((prev) => ({
          ...prev,
          s: timerValue - seconds,
          ms: secondTenths > 0 ? 10 - secondTenths : 0,
        }));
        setDots((prev) => (prev.length < 6 ? prev + "." : "."));
      });
      rec.start();
      setTimeout(() => {
        rec.stop();
      }, timerValue * 1000);
    };

    startRecording(ctx, timeValue.s);
  };

  return (
    <div className="media-top-nav">
      {!recording ? (
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button
                classes={{ root: "timer-btn" }}
                variant="contained"
                color="primary"
                {...bindTrigger(popupState)}
              >
                Set Timer
              </Button>
              <Popover
                classes={{ root: "timer-popover" }}
                marginThreshold={3}
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box p={2}>
                  <div className="timer-div">
                    <RemoveIcon
                      onClick={() =>
                        timeValue.s > 0 &&
                        setTimeValue((prev) => ({ ...prev, s: prev.s - 1 }))
                      }
                    />
                    <span className="media-top-nav-item">
                      {timeValue.s < 10 ? `0${timeValue.s}` : timeValue.s}:
                      {timeValue.ms}0
                    </span>
                    <AddIcon
                      onClick={() =>
                        timeValue.s < 30 &&
                        setTimeValue((prev) => ({ ...prev, s: prev.s + 1 }))
                      }
                    />
                  </div>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      ) : (
        <>
          <span className="media-top-nav-item recording-text">
            Recording {dots}
          </span>
          <span className="media-top-nav-item">
            {timeValue.s < 10 ? `0${timeValue.s}` : timeValue.s}:{timeValue.ms}
          </span>
        </>
      )}
      <FiberManualRecordIcon
        onClick={(e) => !recording && handleRecord()}
        fontSize="large"
        color="error"
        classes={{ root: `media-top-nav-item ${recording}` }}
      />
      <CameraAltIcon
        onClick={(e) => handleScreenshot()}
        fontSize="large"
        classes={{ root: "media-top-nav-item" }}
      />
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
    </div>
  );
};

MediaTopNav.propTypes = {
  currentProject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentProject: state.projects.currentProject,
});

export default connect(mapStateToProps, null)(MediaTopNav);
