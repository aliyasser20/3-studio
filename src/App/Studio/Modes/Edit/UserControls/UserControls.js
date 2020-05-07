import React from "react";
import { useTheme } from "@material-ui/core/styles";

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
        onClick={fileExporter}
      >
        Download
      </Button>
    </div>
  );
};

export default UserControls;
