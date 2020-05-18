import React, { useRef, useEffect } from "react";
import materialLibrary from "../../../../../helpers/materialLibrary";
import { useFrame } from "react-three-fiber";
const PGround = (props) => {
  const mesh = useRef();
  const addDrag = (obj) => {
    const dragObjs = [...props.dragObjects];

    obj && props.setDrag([...dragObjs, mesh.current]);
  };

  const removeDrag = (obj) => {
    const currentDragObjects = [...props.dragObjects];
    const removed = currentDragObjects.filter((obj) => obj.name !== "p-ground");
    props.setDrag(removed);
  };
  useEffect(() => {
    // if (mesh.current) mesh.current.material = materialLibrary("leather").leather;
    if (mesh.current)
      props.pGround.lock ? addDrag(mesh.current) : removeDrag(mesh.current);
  }, [props.pGround.lock]);

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (props.pGround.rotate.x) mesh.current.rotation.x += 0.009;
    if (props.pGround.rotate.y) mesh.current.rotation.y += 0.009;
    if (props.pGround.rotate.z) mesh.current.rotation.z += 0.009;
  });

  return (
    <mesh
      receiveShadow
      rotation={[5, 0, 0]}
      position={[0, -1, 0]}
      ref={mesh}
      name="p-ground"
      visible
      userData={{ name: "p-ground" }}
      // onClick={(e) => props.toggleMediaLock()}
      onPointerOver={(e) => props.pGround.lock && props.toggleMediaLock()}
      onPointerOut={(e) => props.pGround.lock && props.toggleMediaLock()}
      scale={props.pGround.scale}
    >
      <planeBufferGeometry attach="geometry" args={props.pGround.args} />
      <meshStandardMaterial
        attach="material"
        color={`#${props.pGround.color}`}
      />
    </mesh>
  );
};

export default PGround;
