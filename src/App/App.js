import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./HOC/Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./Login_Signup/LoginPage/LoginPage";

import "./App.scss";

const App = () => {
  const loggedIn = false;

  const routes = (
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      {/* <Route path="/signup" component={SignupPage}></Route> */} */}
      <Route path="/" exact component={LandingPage}></Route>
      <Redirect to="/" />
    </Switch>
  );

  const guardedRoutes = (
    <Switch>
      {/* <Route path="/dashboard" component={Dashboard} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/personal-categories" component={PersonalCategoriesPage} />
      <Route path="/all-spendings" component={AllSpendingsPage} />
      <Route path="/settings" component={SettingsPage} /> */}
      {/* <Redirect to="/dashboard" /> */}
    </Switch>
  );

  return (
    <Layout>
      <div className="App">{loggedIn ? guardedRoutes : routes}</div>
    </Layout>
  );
};
export default App;
