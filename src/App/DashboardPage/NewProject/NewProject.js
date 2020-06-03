/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable no-lonely-if */
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
import Snackbar from "@material-ui/core/Snackbar";
import PropTypes from "prop-types";
import { saveModelToCloude, createNewProject } from "./NewProjectHelper";
import { useAuth0 } from "../../../react-auth0-spa";
import Loader from "../../UI/Loader/Loader";
import * as actions from "../../../store/actions/index";
import Alert from "../../UI/Alert/Alert";

const NewProject = (props) => {
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [defaultLink, setDefaultLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [defaultModelClass1, setModelClass1] = useState("default-model-pic");
  const [defaultModelClass2, setModelClass2] = useState("default-model-pic");
  const [defaultModelClass3, setModelClass3] = useState("default-model-pic");
  const [alert, setAlert] = useState("");

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
    setAlert("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFiles([]);
    setName("");
    setDescription("");
    setDefaultLink("");
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

  const handleData = (data) => {
    props.onNewProject(data);
    setLoading(false);
    setOpen(false);
    resetForm();
  };

  const handleDrop = (file) => {
    setFiles(file);
  };
  const handleRemove = () => {
    setFiles([]);
  };

  const handleCreate = () => {
    if (!name || !description || (files.length === 0 && !defaultLink)) {
      if (!name) setAlert("Please provide a name");
      if (!description) setAlert("Please provide a description");
      if (files.length === 0 && !defaultLink)
        setAlert("Please provide a model");
      setAlertOpen(true);
    } else {
      if (files.length > 0) {
        setLoading(true);
        saveModelToCloude(files).then((modelLink) => {
          createNewProject({
            userId: user.sub,
            name,
            description,
            modelLink
          })
            .then(data => {
              props.onNewProject(data);
              setLoading(false);
              setOpen(false);
              resetForm();
            })
            .catch(err => console.log(err));
        });
      } else if (files.length === 0) {
        setLoading(true);
        createNewProject({
          userId: user.sub,
          name,
          description,
          modelLink: defaultLink
        })
          .then(data => {
            props.onNewProject(data);
            setLoading(false);
            setOpen(false);
            resetForm();
          })
          .catch(err => console.log(err));
      }
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
        setDefaultLink("models/range.glb");
        break;
      case 2:
        setModelClass1("default-model-pic");
        setModelClass2("default-model-pic-selected");
        setModelClass3("default-model-pic");
        setDefaultLink(
          "https://res.cloudinary.com/cloud3studio/raw/upload/v1591141097/models/WOLF_tsnmm1.glb"
        );
        break;
      default:
        setModelClass1("default-model-pic");
        setModelClass2("default-model-pic");
        setModelClass3("default-model-pic-selected");
        setDefaultLink(
          "https://res.cloudinary.com/cloud3studio/raw/upload/v1591147076/models/controller_hx52pf.glb"
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
        aria-labelledby="Create New Project"
      >
        {loading && <Loader className="new-project-loader" />}
        <DialogTitle id="form-dialog-title">Create New Project</DialogTitle>
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
            dropzoneClass="new-project-drop-zone"
            dropzoneText=""
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
              src="assets/range.png"
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
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={handleAlertClose}
        >
          <Alert onClose={handleAlertClose} severity="error">
            {alert}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
};

NewProject.propTypes = {
  onNewProject: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onNewProject: (data) => dispatch(actions.newProject(data)),
});

export default connect(null, mapDispatchToProps)(NewProject);
