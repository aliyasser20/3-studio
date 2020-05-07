import React from "react";

import { useTheme } from "@material-ui/core/styles";
import GetAppRounded from "@material-ui/icons/GetAppRounded";

import Button from "@material-ui/core/Button/Button";

import fileExporter from "../../../../../helpers/fileExporter";

const UserControls = () => {
  const theme = useTheme();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ background: theme.palette.primary.mainGradient }}
        startIcon={<GetAppRounded />}
        onClick={fileExporter}
      >
        Download
      </Button>
    </div>
  );
};

export default UserControls;
