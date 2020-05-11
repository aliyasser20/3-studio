import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useAuth0 } from "../react-auth0-spa";

import Layout from "./HOC/Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import DashboardPage from "./DashboardPage/DashboardPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import StudioPage from "./StudioPage/StudioPage";
import Loader from "./UI/Loader/Loader";

import * as actions from "../store/actions/index";

import "./App.scss";

const App = props => {
  const { isAuthenticated, loading, user } = useAuth0();

  useEffect(() => {
    if (user) {
      props.onGetTheme(user.sub);
      props.onGetProjects(user.sub);
    }
  }, [props, user]);

  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage}></Route>
      <Redirect to="/" />
    </Switch>
  );

  const guardedRoutes = (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/studio" component={StudioPage} />
      <Route path="/profile" component={ProfilePage} />
      <Redirect to="/dashboard" />
    </Switch>
  );

  const appContent = loading ? (
    <div className="center">
      <Loader />
    </div>
  ) : (
    <Layout>
      {/* <div className="App">{isAuthenticated ? guardedRoutes : routes}</div> */}
      <div>Heelo</div>
    </Layout>
  );

  return appContent;
};

App.propTypes = {
  onGetProjects: PropTypes.func.isRequired,
  onGetTheme: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onGetProjects: userId => dispatch(actions.getProjects(userId)),
  onGetTheme: userId => dispatch(actions.getTheme(userId))
});

export default connect(null, mapDispatchToProps)(App);
