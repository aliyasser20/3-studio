import React from "react";
import PropTypes from "prop-types";

const MainBody = props => <main className="main-body">{props.children}</main>;

MainBody.propTypes = {
  children: PropTypes.element
};

export default MainBody;
