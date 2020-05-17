import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import lo from "lodash";
import { connect } from "react-redux";

const UserModel = (props) => {
  const { model } = props;
  const currentModel = useRef();

  //for drag controls
  useEffect(() => {
    currentModel.current &&
      !props.dragObjects.includes(currentModel.current) &&
      props.setDrag([...props.dragObjects, currentModel.current]);
  }, []);

  const render = model ? (
    <primitive
      object={model}
      ref={currentModel}
      dispose={null}
      castShadow
      onPointerOver={(e) => props.toggleMediaLock()}
      onPointerOut={(e) => props.toggleMediaLock()}
      rotation={[0, 0, 0]}
    />
  ) : null;
  return <>{render}</>;
};

UserModel.propTypes = {
  model: PropTypes.object.isRequired,
};

export default UserModel;
