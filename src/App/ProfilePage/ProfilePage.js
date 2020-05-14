import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Container,
  MenuItem,
  Select,
  Paper,
  Snackbar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import SingleField from "./SingleField/SingleField";
import Alert from "../UI/Alert/Alert";

import { useAuth0 } from "../../react-auth0-spa";
import { availableThemes } from "../../store/reducers/reducersHelpers/themesHelpers";
import * as actions from "../../store/actions/index";
import backendAxios from "../../axiosInstances/backendAxios";

import "./ProfilePage.scss";

const ProfilePage = props => {
  const { user, logout } = useAuth0();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [name, setName] = useState(false);
  const [nickname, setNickname] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [disabled] = useState(!user.sub.includes("auth0"));
  const [nameField, setNameField] = useState(user.name);
  const [nicknameField, setNicknameField] = useState(user.nickname);
  const [open, setOpen] = React.useState(false);

  const themes = availableThemes.map(theme => (
    <MenuItem key={theme.name} value={theme.name}>
      {theme.name}
    </MenuItem>
  ));

  const changeTheme = theme => {
    backendAxios
      .put("/api/themes", {
        theme,
        userId: user.sub
      })
      .then(() => {
        props.onSetTheme(theme);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteAccount = () => {
    backendAxios
      .delete("/api/users", {
        data: {
          userId: user.sub
        }
      })
      .then(() => {
        logout();
      })
      .catch(error => {
        console.log(error);
        setMessage("Could not delete account!");
        setSeverity("error");
        setOpen(true);
        setConfirmDelete(false);
      });
  };

  // Only for auth0-authenticated users (not fb and gmail)
  const resetPassword = () => {
    backendAxios
      .post("/api/users", {
        email: user.email
      })
      .then(() => {
        setMessage(
          "Please check your email for instructions on how to reset your password."
        );
        setSeverity("success");
        setOpen(true);
      })
      .catch(error => {
        setMessage("Could not reset password!");
        setSeverity("error");
        setOpen(true);
        console.log(error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const page = (
    <Container maxWidth="md" classes={{ root: "container-padding" }}>
      <div className="profile-page">
        <div className="top-section">
          <div className="picture-container">
            <img
              className="profile-picture"
              src={user.picture}
              alt="profile picture"
            />
          </div>
          <div className="theme-selector-area">
            <Select
              labelId="theme"
              id="theme"
              value={props.currentTheme}
              onChange={e => {
                changeTheme(e.target.value);
              }}
              label="Theme"
            >
              {themes}
            </Select>
          </div>
        </div>
        <div className="middle-section">
          <Paper className="user-info">
            <SingleField
              setMessage={setMessage}
              setSeverity={setSeverity}
              setOpen={setOpen}
              field="name"
              editValue={name}
              setEditValue={setName}
              value={nameField}
              setValue={setNameField}
              disabled={disabled}
            />
            <SingleField
              setMessage={setMessage}
              setSeverity={setSeverity}
              setOpen={setOpen}
              field="nickname"
              editValue={nickname}
              setEditValue={setNickname}
              value={nicknameField}
              setValue={setNicknameField}
              disabled={disabled}
            />
          </Paper>
        </div>
        <div className="bottom-section">
          <span className="gradient-button">
            <Button
              classes={{ root: "containedSecondary" }}
              variant="contained"
              disabled={disabled}
              color="secondary"
              startIcon={<VpnKeyIcon />}
              onClick={() => {
                if (!disabled) {
                  resetPassword();
                }
              }}
            >
              Reset Password
            </Button>
          </span>
          <span className="delete-account-button">
            <Button
              classes={{ root: "containedSecondary" }}
              variant="contained"
              color="secondary"
              startIcon={<DeleteSweepIcon />}
              onClick={() => setConfirmDelete(true)}
            >
              Delete Account
            </Button>
          </span>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <Dialog
        // classes={{ root: "delete-account-dialog" }}
        className="delete-account-dialog"
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to permanently delete your account?
        </DialogTitle>
        <DialogActions>
          <Button
            classes={{ root: "cancel-delete-account" }}
            onClick={() => setConfirmDelete(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            classes={{ root: "confirm-delete-account" }}
            onClick={deleteAccount}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );

  return page;
};

ProfilePage.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onSetTheme: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentTheme: state.themes.currentTheme
});

const mapDispatchToProps = dispatch => ({
  onSetTheme: theme => dispatch(actions.setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
