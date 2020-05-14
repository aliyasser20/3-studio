import React from "react";
import PropTypes from "prop-types";

import { Paper, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import "./SingleField.scss";

const SingleField = props => {
  let classes;

  return (
    <div className="single-field">
      <Paper className="single-field-paper">
        <div className="label-section">
          <p className="label">Name</p>
        </div>
        <div className="info-area">
          <p className="value">Ahmed Alwardani</p>
        </div>
        {props.editValue ? (
          <div className="action-buttons">
            <IconButton
              aria-label="edit"
              classes={{ root: "action-button" }}
              size="small"
              // onClick={() => setEdit(true)}
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              aria-label="edit"
              classes={{ root: "action-button" }}
              size="small"
              // onClick={() => setEdit(true)}
            >
              <CheckIcon />
            </IconButton>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => props.setEditValue(true)}
            className="edit-button"
          >
            <EditIcon />
          </button>
        )}
      </Paper>
    </div>
  );
};

SingleField.propTypes = {
  editValue: PropTypes.bool.isRequired,
  setEditValue: PropTypes.func.isRequired
};

export default SingleField;
