import React from "react";
import PropTypes from "prop-types";

import { Paper, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import backendAxios from "../../../axiosInstances/backendAxios";
import { useAuth0 } from "../../../react-auth0-spa";

import "./SingleField.scss";

const SingleField = props => {
  const { user } = useAuth0();

  const handleCheck = () => {
    backendAxios
      .put("/api/users", {
        userId: user.sub,
        [props.field]: props.value
      })
      .then(() => {
        props.setMessage("Successfully edited!");
        props.setSeverity("success");
        props.setOpen(true);
        props.setEditValue(false);
      })
      .catch(err => {
        props.setMessage("Edit failed");
        props.setSeverity("error");
        props.setOpen(true);
        props.setEditValue(false);
        console.log(err);
      });
  };

  const handleChange = value => {
    if (props.field === "name") {
      props.setValue(value.slice(0, 25));
    }
    if (props.field === "nickname") {
      props.setValue(value.slice(0, 20));
    }
  };

  return (
    <div className="single-field">
      <Paper className="single-field-paper">
        <div className="label-section">
          <p className="label">{props.field}</p>
        </div>
        <div className="info-area">
          {props.editValue ? (
            <input
              autoFocus
              type="text"
              onChange={e => handleChange(e.target.value)}
              value={props.value}
            />
          ) : (
            <p className="value">{props.value}</p>
          )}
        </div>
        {props.editValue ? (
          <div className="action-buttons">
            <IconButton
              aria-label="edit"
              classes={{ root: "action-button" }}
              size="small"
              onClick={() => {
                props.setValue(user[props.field]);
                props.setEditValue(false);
              }}
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              aria-label="edit"
              classes={{ root: "action-button" }}
              size="small"
              onClick={handleCheck}
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
  setEditValue: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setSeverity: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default SingleField;
