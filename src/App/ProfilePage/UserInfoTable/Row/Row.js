import React from "react";
import PropTypes, { string } from "prop-types";

import { IconButton, TableRow, TableCell } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import { useAuth0 } from "../../../../react-auth0-spa";

const request = require("request");

// Get access token

const optionsGetAccessToken = {
  method: "POST",
  url: "https://dev-1ee5do6a.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  form: {
    grant_type: "client_credentials",
    client_id: "IysHD3AMe37ZsxVf0cW9TfVDMDjJ0VHv",
    client_secret:
      "UEuwfEq5RAB9dy-Y_Hs_urR61brt8BwU4ySX1yIdYJO9UtpKy33HteFrorblfXKH",
    audience: "https://dev-1ee5do6a.auth0.com/api/v2/"
  }
};

request(optionsGetAccessToken, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

const Row = props => {
  const { user } = useAuth0();
  const handleCheck = () => {
    // send api to update field.then():
    const options = {
      method: "PATCH",
      url: `https://dev-1ee5do6a.auth0.com/api/v2/users/${user.sub.slice(6)}`,
      headers: {
        "content-type": "application/json",
        authorization: "Bearer MGMT_API_ACCESS_TOKEN", // GET THIS from above
        "cache-control": "no-cache"
      },
      body: '{ "name": {NAME_VALUE}, "nickname": NICKNAME_VALUE}' // GET CURRENT NAME AND NICKNAME
    };

    request(options, (error, response, body) => {
      if (error) {
        throw new Error(error);
      } else {
        props.setEdit(false);
      }
      console.log(body);
    });
  };

  const handleCancel = () => {
    props.setEdit(false);
  };

  const editMode = (
    <form>
      <input value={props.value}></input>
      <IconButton onClick={handleCancel}>
        <CloseIcon />
      </IconButton>

      <IconButton onClick={handleCheck}>
        <CheckIcon />
      </IconButton>
    </form>
  );

  return (
    <div className="row">
      <TableRow>
        <TableCell align="center">{props.field}</TableCell>
        <TableCell align="center">
          {props.edit ? editMode : props.value}
        </TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="edit"
            classes={{ root: "action-button" }}
            size="small"
            onClick={() => props.setEdit(true)}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </div>
  );
};

Row.propTypes = {
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired
};

export default Row;
