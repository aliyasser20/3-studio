import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const ResetPasswordButton = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.onClick} variant="contained" color="primary">
        Reset Password
      </Button>
    </div>
  );
};

export default ResetPasswordButton;
