import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../../../../store/actions/index";

import "./EnvironmentOptions.scss";

const EnvironmentOptions = props => {
  const options = props.environmentOptions.map(option => (
    // eslint-disable-next-line
    <div  key={option.name} onClick={() => {
        // Trigger unsaved changes
        if (props.currentEnvironmentOption.name !== option.name) {
          props.onSetConfigurationUnsaved();
        }
        //
        props.onSetEnvironmentOption(option);
      }}
      className={
        props.currentEnvironmentOption.name === option.name
          ? "single-option selected"
          : "single-option"
      }
    >
      <img src={option.imgPath} alt={option.name} />
      <div className="option-name-container">
        <p className="option-name">{option.name}</p>
      </div>
    </div>
  ));

  return <div className="environment-options">{options}</div>;
};

EnvironmentOptions.propTypes = {
  environmentOptions: PropTypes.array.isRequired,
  onSetEnvironmentOption: PropTypes.func.isRequired,
  currentEnvironmentOption: PropTypes.object.isRequired,
  onSetConfigurationUnsaved: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  environmentOptions: state.environmentControls.environmentOptions,
  currentEnvironmentOption: state.environmentControls.currentEnvironmentOption
});

const mapDispatchToProps = dispatch => ({
  onSetEnvironmentOption: option =>
    dispatch(actions.setEnvironmentOption(option)),
  onSetConfigurationUnsaved: () => dispatch(actions.setConfigurationUnsaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentOptions);
