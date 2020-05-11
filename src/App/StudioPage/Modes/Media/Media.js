import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import CCapture from "ccapture.js/src/CCapture";
import { useThree } from "react-three-fiber";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MediaCanvas from "./MegiaCanvas/MediaCanvas";
import Testing from "./Testing";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import cloudinaryAxios from "../../../../axiosInstances/cloudinaryAxios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Media = (props) => {
  const [open, setOpen] = React.useState(false);
  const [screenShot, setScreenshot] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const capturer = new CCapture({
    format: "gif",
    workersPath: "workers/",
    framerate: 20,
    verbose: true,
  });

  const { gl, scene, camera } = useThree();

  const handleScreenshot = () => {
    const canvas = document.querySelector("canvas");
    // const newWindow = window.open("", "");
    // newWindow.document.title = "Screenshot";
    // // w.document.body.style.backgroundColor = "red";
    // const img = new Image();
    // // Without 'preserveDrawingBuffer' set to true, we must render now
    // gl.render(scene, camera);
    // // renderer.render(scene, camera);
    // img.src = canvas.toDataURL();
    // newWindow.document.body.appendChild(img);
    //

    const pre = canvas.toDataURL("image/png", 1.0);
    // const formData = new FormData();
    // formData.append("file", pre);
    // formData.append("public_id", "90/newScreenShot2");
    // formData.append("upload_preset", "screenshotUpload"); // Replace the preset name with your own
    // formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
    // formData.append("timestamp", (Date.now() / 1000) | 0);
    // console.log(pre);
    // return cloudinaryAxios
    //   .post("/image/upload", formData, {
    //     headers: { "X-Requested-With": "XMLHttpRequest" },
    //   })
    //   .then((res) => console.log(res));
    // canvas.toBlob(function(blob) {
    //   console.log(blob);
      setOpen(true);
      const preview = document.querySelector("#preview-img");
      const link = document.querySelector("#download-link");

    //   // const newImg = document.createElement("img");
    //   // const a = document.createElement("a");
    //   blob.name = "TestScreenShot.png"
    //   setScreenshot(blob);
    //   const url = URL.createObjectURL(blob);
    //   // window.open(url);
      preview.src = pre;
      link.href = pre
            console.log(link.href)
    //   // a.download = "newGif";
    //   // a.id = "download";
    //   // document.body.appendChild(newImg);
    //   // document.body.appendChild(a);
    // });
  };

  const handleGif = () => {
    // console.log("ok")
    capturer.start();
    setTimeout(() => {
      capturer.stop();
      capturer.save((blob) => {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        const url = URL.createObjectURL(blob);
        window.open(url);
        a.herf = url;
        a.download = "newGif";
        a.click();
      });
    }, 5000);
  };

  return (
    <>
      {/* <Testing /> */}
      <MediaCanvas capturer={capturer} />
      <Button onClick={(e) => handleScreenshot()}>screenshot</Button>
      <Button onClick={(e) => handleGif()}>gif</Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Use Google's location service?
        </DialogTitle>
        <DialogContent>
          <img id="preview-img" src="" alt="preview-img" />
          <a id="download-link" type="button" href="" download="test">
            Download
          </a>
          <Button>Cancel</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Media.propTypes = {};

export default Media;
