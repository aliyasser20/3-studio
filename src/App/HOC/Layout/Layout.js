import React, { Fragment } from "react";
import PropTypes from "prop-types";

import NavBar from "../../NavBar/NavBar";
import MainBody from "../MainBody/MainBody";

import "./Layout.scss";

const Layout = props => (
  <Fragment>
    <NavBar />
    <MainBody>{props.children}</MainBody>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
