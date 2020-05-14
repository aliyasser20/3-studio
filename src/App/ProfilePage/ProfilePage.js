import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Container,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Paper,
  IconButton,
  Snackbar
} from "@material-ui/core";
import UserInfoTable from "./UserInfoTable/UserInfoTable";

import DeleteAccountButton from "./DeleteAccountButton/DeleteAccountButton";

import ResetPasswordButton from "./ResetPasswordButton/ResetPasswordButton";

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
      .catch(error => console.log(error));
  };

  // Only for auth0-authenticated users (not fb and gmail)
  const resetPassword = () => {
    backendAxios
      .post("/api/users", {
        email: user.email
      })
      .then(() =>
        alert("Check email for instructions on how to reset your password")
      )
      .catch(error => console.log(error));
  };

  // const page = (
  //   <Container maxWidth="md" classes={{ root: "container-padding" }}>
  //     <div className="profile-page">
  //       <img className="profile-picture" src={user.picture} alt="Profile" />

  //       <FormControl variant="outlined">
  //         <InputLabel id="demo-simple-select-outlined-label">Theme</InputLabel>
  //         <Select
  //           labelId="theme"
  //           id="theme"
  //           value={props.currentTheme}
  //           onChange={e => {
  //             changeTheme(e.target.value);
  //           }}
  //           label="Theme"
  //         >
  //           {themes}
  //         </Select>
  //       </FormControl>
  //       <UserInfoTable />
  //       <DeleteAccountButton
  //         onClick={() => {
  //           setConfirmDelete(true);
  //         }}
  //       />
  //       {user.sub.includes("auth0") && (
  //         <ResetPasswordButton onClick={resetPassword} />
  //       )}
  //       {confirmDelete && (
  //         <button
  //           onClick={() => {
  //             console.log("here");
  //             deleteAccount();
  //           }}
  //         >
  //           Confirm
  //         </button>
  //       )}
  //     </div>
  //   </Container>
  // );

  const [nameField, setNameField] = useState(user.name);
  const [nicknameField, setNicknameField] = useState(user.nickname);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
            />
          </Paper>
        </div>
        <div className="bottom-section"></div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
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
