import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { DropzoneArea } from "material-ui-dropzone";
import "./NewProject.scss";
import { connect } from "react-redux";
import { object } from "prop-types";
import { saveModelToCloude, createNewProject } from "./NewProjectHelper";
import { useAuth0 } from "../../../react-auth0-spa";
import Loader from "../../UI/Loader/Loader";
import * as actions from "../../../store/actions/index";

const NewProject = (props) => {
  const { user } = useAuth0();
  console.log(user)
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const uploadUrl = "/raw/upload/";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [defaultLink, setDefaultLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [defaultModelClass1, setModelClass1] = useState("default-model-pic");
  const [defaultModelClass2, setModelClass2] = useState("default-model-pic");
  const [defaultModelClass3, setModelClass3] = useState("default-model-pic");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDrop = (file) => {
    setFiles(file);
  };
  const handleRemove = () => {
    setFiles([]);
  };
  const resetForm = () => {
    setName("");
    setDescription("");
    setDefaultLink("");
    setFiles([]);
    setModelClass1("default-model-pic");
    setModelClass2("default-model-pic");
    setModelClass3("default-model-pic");
  };

  const handleCreate = () => {
    if (files.length > 0) {
      console.log(files);
      setLoading(true);
      saveModelToCloude(files).then((modelLink) => {
        console.log(name, description, modelLink);
        createNewProject({
          userId: user.sub,
          name,
          description,
          modelLink,
        }).then((data) => {
          props.onNewProject(data);
          setLoading(false);
          setOpen(false);
          resetForm();
        });
      });
    } else if (files.length === 0) {
      console.log("default");
      setLoading(true);
      createNewProject({
        userId: user.sub,
        name,
        description,
        modelLink: defaultLink,
      }).then((data) => {
        props.onNewProject(data);
        setLoading(false);
        setOpen(false);
        resetForm();
      });
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleDefaultSelect = (e) => {
    switch (e) {
      case 1:
        setModelClass1("default-model-pic-selected");
        setModelClass2("default-model-pic");
        setModelClass3("default-model-pic");
        setDefaultLink("models/car.glb");
        break;
      case 2:
        setModelClass1("default-model-pic");
        setModelClass2("default-model-pic-selected");
        setModelClass3("default-model-pic");
        setDefaultLink(
          "https://res.cloudinary.com/aajfinal/raw/upload/v1589122332/models/WOLF_okocpw.glb"
        );
        break;
      default:
        setModelClass1("default-model-pic");
        setModelClass2("default-model-pic");
        setModelClass3("default-model-pic-selected");
        setDefaultLink(
          "https://res.cloudinary.com/aajfinal/raw/upload/v1589160418/models/controller_yt5zl6.glb"
        );
        break;
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
        {loading && <Loader className="new-project-loader" />}
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(e) => handleName(e)}
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
            onChange={(e) => handleDescription(e)}
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
            onDrop={(e) => handleDrop(e)}
            onDelete={(e) => handleRemove()}
          />
          <h3>Or choose one of our default models</h3>
          <div className="default-model-area">
            <img
              id="default-model-1"
              className={defaultModelClass1}
              src="assets/car.png"
              alt="defaultmodel-car"
              onClick={(e) => handleDefaultSelect(1)}
            />
            <img
              id="default-model-2"
              className={defaultModelClass2}
              src="assets/wolf.png"
              alt="defaultmodel-wolf"
              onClick={(e) => handleDefaultSelect(2)}
            />
            <img
              id="default-model-3"
              className={defaultModelClass3}
              src="assets/controller.png"
              alt="defaultmodel-controller"
              onClick={(e) => handleDefaultSelect(3)}
            />
          </div>
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

NewProject.prototype = {};

const mapDispatchToProps = (dispatch) => ({
  onNewProject: (data) => dispatch(actions.newProject(data)),
});

export default connect(null, mapDispatchToProps)(NewProject);
