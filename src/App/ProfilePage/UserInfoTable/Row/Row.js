// import React from "react";
// import PropTypes from "prop-types";

// import { IconButton, TableRow, TableCell } from "@material-ui/core";
// import EditIcon from "@material-ui/icons/Edit";
// import CheckIcon from "@material-ui/icons/Check";
// import CloseIcon from "@material-ui/icons/Close";

// import { useAuth0 } from "../../../../react-auth0-spa";
// import backendAxios from "../../../../axiosInstances/backendAxios";

// const Row = props => {
//   const { user } = useAuth0();

//   const handleCancel = () => {
//     props.setEdit(false);
//   };

//   const handleChange = value => {
//     if (props.field === "name") {
//       props.setValue(value.slice(0, 15));
//     }
//     if (props.field === "nickname") {
//       props.setValue(value.slice(0, 25));
//     }
//   };

//   const editMode = (
//     <form>
//       <input
//         onChange={e => handleChange(e.target.value)}
//         value={props.value}
//       ></input>
//       <IconButton onClick={handleCancel}>
//         <CloseIcon />
//       </IconButton>

//       <IconButton onClick={handleCheck}>
//         <CheckIcon />
//       </IconButton>
//     </form>
//   );

//   return (
//     <div className="row">
//       <TableRow>
//         <TableCell align="center">{props.field}</TableCell>
//         <TableCell align="center">
//           {props.edit ? editMode : props.value}
//         </TableCell>
//         <TableCell align="center">
//           {user.sub.includes("auth0") && (
//             <IconButton
//               aria-label="edit"
//               classes={{ root: "action-button" }}
//               size="small"
//               onClick={() => props.setEdit(true)}
//             >
//               <EditIcon />
//             </IconButton>
//           )}
//         </TableCell>
//       </TableRow>
//     </div>
//   );
// };

// Row.propTypes = {
//   value: PropTypes.string.isRequired,
//   field: PropTypes.string.isRequired,
//   edit: PropTypes.bool.isRequired,
//   setEdit: PropTypes.func.isRequired,
//   setValue: PropTypes.func.isRequired
// };

// export default Row;
