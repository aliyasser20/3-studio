import React from "react";
import PropTypes from "prop-types";

const MainBody = props => <div className="main-body">{props.children}</div>;

MainBody.propTypes = {
  children: PropTypes.element
};

export default MainBody;
