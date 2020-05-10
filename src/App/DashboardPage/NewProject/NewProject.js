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
import "./NewProject.scss";
import { saveModelToCloude, createNewProject } from "./NewProjectHelper";
import { useAuth0 } from "../../../react-auth0-spa";
import Loader from "../../UI/Loader/Loader";

const NewProject = () => {
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const uploadUrl = "/raw/upload/";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [modelLink, setModelLink] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrop = async file => {
    file.length > 0 && (await setFiles(file));
  };

  const handleCreate = () => {
    if (files.length > 0) {
      setLoading(true);
      saveModelToCloude(files).then(modelLink => {
        setModelLink(modelLink);
        setLoading(false);
        setOpen(false);
        // console.log(name, description, modelLink);
        createNewProject({ userId: user.sub, name, description, modelLink });
      });
    }
  };

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleDescription = e => {
    e.preventDefault();
    setDescription(e.target.value);
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
        {loading && <Loader />}
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={e => handleName(e)}
            autoFocus
            margin="dense"
            id="project-name"
            label="Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            value={description}
            onChange={e => handleDescription(e)}
            margin="dense"
            id="project-description"
            label="Description"
            type="text"
            fullWidth
            required
          />
          <h3>Upload Model</h3>
          <DropzoneArea
            dropzoneText="Drag and drop your glb model here or click to upload"
            acceptedFiles={[".glb"]}
            maxFileSize={10000000}
            filesLimit={1}
            onDrop={e => handleDrop(e)}
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
