import React from "react";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import "./NewProject.scss";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const NewProject = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="new-project">
      <AddCircleIcon
        classes={{ root: "add-btn" }}
        variant="outlined"
        fontSize="large"
        onClick={handleClickOpen}
      />
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
          <DropzoneArea dropzoneText="Drag and drop your gltf/glb model here or click to upload" />
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
            onClick={handleClose}
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
