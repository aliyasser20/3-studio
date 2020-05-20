import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const UserModel = (props) => {
  const { model } = props;
  const currentModel = useRef();

  const addDrag = (obj) => {
    const dragObjs = [...props.dragObjects];

    obj && props.setDrag([...dragObjs, currentModel.current]);
  };

  const removeDrag = (obj) => {
    const currentDragObjects = [...props.dragObjects];
    const removed = currentDragObjects.filter((obj) => obj.name !== model.name);
    props.setDrag(removed);
  };
  useEffect(() => {
    console.log(props.userModelDrag);
    // if (mesh.current) mesh.current.material = materialLibrary("leather").leather;
    if (currentModel.current)
      props.userModelDrag
        ? addDrag(currentModel.current)
        : removeDrag(currentModel.current);
  }, [props.userModelDrag]);

  const render = model ? (
    <primitive
      object={model}
      ref={currentModel}
      dispose={null}
      castShadow
      onPointerOver={(e) => props.userModelDrag && props.toggleMediaLock()}
      onPointerOut={(e) => props.userModelDrag && props.toggleMediaLock()}
      rotation={[0, 0, 0]}
    />
  ) : null;
  return <>{render}</>;
};

UserModel.propTypes = {
  model: PropTypes.object.isRequired,
  userModelDrag: PropTypes.bool,
  toggleMediaLock: PropTypes.func.isRequired,
  dragObjects: PropTypes.array.isRequired
};

export default UserModel;
