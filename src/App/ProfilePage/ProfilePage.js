import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container } from "@material-ui/core";

import { useAuth0 } from "../../react-auth0-spa";
import * as actions from "../../store/actions/index";

const ProfilePage = props => {
  const { user } = useAuth0();

  return (
    <div className="profile-page">
      <Container maxWidth="xl" classes={{ root: "container-padding" }}>
        <h1>Profile Page</h1>
        <img src={user.picture} alt="Profile" />
        <h2>Testing id (sub): {user.sub}</h2>
        <h2>Name of user: {user.name}</h2>
        <p>Email of user: {user.email}</p>
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
