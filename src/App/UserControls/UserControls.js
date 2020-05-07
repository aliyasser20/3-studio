import React from "react";

import Button from "@material-ui/core/Button/Button";
import red from "@material-ui/core/colors/red";

import exporter from "../../helpers/exporter";

const UserControls = () => {
  const red400 = red[400];

  return (
    <div>
      <Button variant="contained" color="primary" onClick={exporter}>
        Download
      </Button>
    </div>
  );
};

export default UserControls;
