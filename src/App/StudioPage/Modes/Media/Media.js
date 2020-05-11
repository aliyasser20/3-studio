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
const Media = (props) => {
  const [open, setOpen] = React.useState(false);

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
    canvas.toBlob(function(blob) {
      console.log(blob);
      const newImg = document.createElement("img");
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      // window.open(url);
      newImg.src = url;
      a.herf = url;
      a.download = "newGif";
      a.id = "download";
      document.body.appendChild(newImg);
      document.body.appendChild(a);
    });
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
        // a.herf = url;
        // a.download = "newGif";
        // a.click();
      });
    }, 5000);
  };

  return (
    <>
    {/* <Testing /> */}
      <MediaCanvas capturer={capturer} />
      <Button onClick={(e) => handleScreenshot()}>screenshot</Button>
      <Button onClick={(e) => handleGif()}>gif</Button>
      <div>
        <button type="button" onClick={handleOpen}>
          react-transition-group
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <img id="preview-img" src="" alt="preview" />
          </Fade>
        </Modal>
      </div>
    </>
  );
};

Media.propTypes = {};

export default Media;
