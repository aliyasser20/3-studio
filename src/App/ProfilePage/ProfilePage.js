import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Container,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from "@material-ui/core";

import { useAuth0 } from "../../react-auth0-spa";
import { availableThemes } from "../../store/reducers/reducersHelpers/themesHelpers";
import * as actions from "../../store/actions/index";

const ProfilePage = props => {
  const { user } = useAuth0();

  const themes = availableThemes.map(theme => (
    <MenuItem key={theme.name} value={theme.name}>
      {theme.name}
    </MenuItem>
  ));

  return (
    <div className="profile-page">
      <Container maxWidth="xl" classes={{ root: "container-padding" }}>
        <h1>Profile Page</h1>
        <img src={user.picture} alt="Profile" />
        <h2>Testing id (sub): {user.sub}</h2>
        <h2>Name of user: {user.name}</h2>
        <p>Email of user: {user.email}</p>

        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Theme</InputLabel>
          <Select
            labelId="theme"
            id="theme"
            value={props.currentTheme}
            onChange={e => {
              props.onSetTheme(e.target.value);
            }}
            label="Theme"
          >
            {themes}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
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
