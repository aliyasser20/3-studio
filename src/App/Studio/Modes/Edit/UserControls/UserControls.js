import React from "react";

import Button from "@material-ui/core/Button/Button";

import fileExporter from "../../../../../helpers/fileExporter";

const UserControls = () => (
  <div>
    <Button variant="contained" color="primary" onClick={fileExporter}>
      Download
    </Button>
  </div>
);

export default UserControls;
