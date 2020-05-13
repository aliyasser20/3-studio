import React, { useState } from "react";

import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";

import Row from "./Row/Row";

import { useAuth0 } from "../../../react-auth0-spa";

export default function UserInfoTable() {
  const { user } = useAuth0();
  const [editName, setEditName] = useState(false);
  const [editNickname, setEditNickname] = useState(false);
  const [nameField, setNameField] = useState(user.name);
  const [nicknameField, setNicknameField] = useState(user.nickname);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="user info table">
        <TableBody>
          <Row
            value={nameField}
            setValue={setNameField}
            field="name"
            edit={editName}
            setEdit={setEditName}
          />
          <Row
            value={nicknameField}
            setValue={setNicknameField}
            field="nickname"
            edit={editNickname}
            setEdit={setEditNickname}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
