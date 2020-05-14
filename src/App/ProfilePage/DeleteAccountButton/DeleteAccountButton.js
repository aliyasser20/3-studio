import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import "./DeleteAccountButton.scss";

const DeleteAccountButton = props => (
  <div>
    <span className="gradient-button">
      <Button
        classes={{ root: "containedSecondary" }}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={props.onClick}
      >
        Delete Account
      </Button>
    </span>
  </div>
);

export default DeleteAccountButton;
