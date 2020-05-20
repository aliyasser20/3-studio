import React, { useRef, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import PropTypes from "prop-types";
import materialLibrary from "../../../../../helpers/materialLibrary";

const LSphere = props => {
  const lSphere = useRef();
  // on crate configure drag control and set material
  useEffect(() => {
    const dragObjs = [...props.dragObjects];
    if (lSphere.current) {
      props.setDrag([...dragObjs, lSphere.current]);
      lSphere.current.material = materialLibrary("leather").leather;
    }
  }, []);

  // rotation animation controls
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (props.lSphere.rotateX) lSphere.current.rotation.x += 0.007;
    if (props.lSphere.rotateY) lSphere.current.rotation.y += 0.007;
    if (props.lSphere.rotateZ) lSphere.current.rotation.z += 0.007;
  });
  return (
    <mesh
      ref={lSphere}
      name="l-sphere"
      visible
      userData={{ name: "l-sphere" }}
      onPointerOver={e => props.toggleMediaLock()}
      onPointerOut={e => props.toggleMediaLock()}
      castShadow
      scale={[...props.lSphere.scale]}
    >
      <sphereGeometry attach="geometry" args={[...props.lSphere.args]} />
    </mesh>
  );
};

LSphere.propTypes = {
  lSphere: PropTypes.object.isRequired,
  dragObjects: PropTypes.array.isRequired,
  setDrag: PropTypes.func.isRequired,
  toggleMediaLock: PropTypes.func.isRequired,
};
export default LSphere;
