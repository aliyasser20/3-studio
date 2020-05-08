import React from "react";

import GetAppRounded from "@material-ui/icons/GetAppRounded";
import Button from "@material-ui/core/Button/Button";

import fileExporter from "../../../../../helpers/fileExporter";

const UserControls = () => (
  <div>
    <span className="gradient-button">
      <Button
        variant="contained"
        color="primary"
        startIcon={<GetAppRounded />}
        onClick={fileExporter}
      >
        Download
      </Button>
    </span>
  </div>
);

export default UserControls;
