import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { DropzoneArea } from "material-ui-dropzone";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryAxios from "../../../axiosInstances/cloudinaryAxios";
import "./NewProject.scss";

const NewProject = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const uploadUrl = "/raw/upload/";
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("state", files);
  };

  const handleChange = file => {
    file.length > 0 && setFiles(file);
  };

  const handleCreate = () => {
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("tags", "rocket");
      formData.append("upload_preset", "modelUpload"); // Replace the preset name with your own
      formData.append("api_key", "463438241363482"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);
      console.log(formData);
      return cloudinaryAxios
        .post(uploadUrl, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(res => {
          console.log(res.data.secure_url);
        });
    }
  };

  return (
    <div className="new-project">
      <span className="gradient-button">
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          New Project
        </Button>
      </span>
      <Dialog
        classes={{ root: "new-project-modal" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="New Project"
      >
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="project-name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="project-description"
            label="Description"
            type="text"
            fullWidth
          />
          <h3>Upload Model</h3>
          <DropzoneArea
            dropzoneText="Drag and drop your glb model here or click to upload"
            acceptedFiles={[".glb"]}
            maxFileSize={10000000}
            filesLimit={1}
            onChange={e => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            classes={{ label: "new-project-btn" }}
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            classes={{ label: "new-project-btn" }}
            onClick={handleCreate}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default NewProject;
