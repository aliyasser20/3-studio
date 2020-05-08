import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./HOC/Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./Login_Signup/LoginPage/LoginPage";
import SignupPage from "./Login_Signup/SignupPage/SignupPage";
import DashboardPage from "./DashboardPage/DashboardPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import StudioPage from "./StudioPage/StudioPage";

import "./App.scss";

const App = () => {
  const loggedIn = true;

  const routes = (
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/signup" component={SignupPage}></Route>
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

  return (
    <Layout>
      <div className="App">{loggedIn ? guardedRoutes : routes}</div>
    </Layout>
  );
};
export default App;
