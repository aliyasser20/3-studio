import React, { useRef } from "react";
import PropTypes from "prop-types";
import lo from "lodash";

const UserModel = (props) => {
  const userModel = props.model
  const currentModel = useRef();
  // useFrame(({ gl, scene, camera }) => {
  //   gl.render(scene, camera);
  //   reeef.current.rotation.y += 0.2;
  // });
  console.log("model", userModel);
  return (
    <primitive
      object={userModel}
      ref={currentModel}
      dispose={null}
      castshadow
      rotation={[0, 0, 0]}
    />
  );
};

UserModel.propTypes = {
  model: PropTypes.object.isRequired,
};

export default UserModel;
