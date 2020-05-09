import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Button,
  Popover,
  Typography,
  Avatar,
  IconButton,
  Box
} from "@material-ui/core";

import "./AvatarPopover.scss";

const AvatarPopover = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="avatar-popover">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Avatar alt={props.username} src={props.picture} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div className="avatar-popover-content">
          <div className="user-info">
            <Avatar
              className="large-avatar"
              alt={props.username}
              src={props.picture}
            />
            <Typography variant="h5" classes={{ root: "user-display-name" }}>
              <Box fontWeight="700">{props.username.slice(0, 18)}</Box>
            </Typography>
          </div>
          <Link to="/profile">
            <Button classes={{ root: "link-to-profile" }} onClick={handleClose}>
              Profile Preferences
            </Button>
          </Link>
          <div>
            <Button
              classes={{ root: "sign-out-button" }}
              onClick={props.logout}
            >
              Sign out
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

AvatarPopover.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default AvatarPopover;
