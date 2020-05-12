import React from "react";
import { Link } from "react-router-dom";

import { Dialog, DialogContent, Box, Typography } from "@material-ui/core";

import Loader from "../../UI/Loader/Loader";

import "./LoaderModal.scss";

const LoaderModel = props => (
  <div className="loader-modal">
    <Dialog
      classes={{ root: "loader-dialog" }}
      fullWidth={false}
      maxWidth="lg"
      open
      aria-labelledby="loader modal"
    >
      <DialogContent classes={{ root: "content-area" }}>
        <Loader />
        <Box fontWeight={500}>
          <Typography variant="h6" component="p">
            Taking too long?
          </Typography>
          <Link to="/dashboard">
            <Typography variant="subtitle1" component="p">
              Return to Dashboard
            </Typography>
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  </div>
);

export default LoaderModel;
