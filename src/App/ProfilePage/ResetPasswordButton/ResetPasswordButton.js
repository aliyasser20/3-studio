import React from "react";
import Button from "@material-ui/core/Button";

import "./ResetPasswordButton.scss";

const ResetPasswordButton = props => (
  <div className="reset-password">
    <Button onClick={props.onClick} variant="contained" color="primary">
      Reset Password
    </Button>
  </div>
);
export default ResetPasswordButton;
