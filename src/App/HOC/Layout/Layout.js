import React, { Fragment } from "react";
import PropTypes from "prop-types";

import NavBar from "../../NavBar/NavBar";

import "./Layout.scss";

const Layout = props => (
  <Fragment>
    <NavBar />
    <main>{props.children}</main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
