import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useThree } from "react-three-fiber";

const DControls = (props) => {
  const dragRef = useRef();
  const { camera, gl } = useThree();

  return (
    <dragControls
      args={[props.dragObjects, camera, gl.domElement]}
      ref={dragRef}
    />
  );
};
DControls.propTypes = {
  dragObjects: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  dragObjects: state.mediaState.dragObjects,
});


export default DControls;
