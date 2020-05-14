import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Paper,
  ThemeProvider,
  Tabs,
  Tab,
  Box,
  Typography,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import themeCreator from "../../../helpers/themeCreator";
import * as actions from "../../../store/actions/index";

import "./AppearancesBar.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="custom-tab-panel"
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box p={3}>
        //   <Typography>{children}</Typography>
        // </Box>
        <div className="custom-tab-content">{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const AppearancesBar = props => {
  const theme = themeCreator("#ffffff", "#212121");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="appearances-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div className="top-bar">
            <div className="title-area">
              <h4 className="title">Appearances</h4>
            </div>
            <div className="tab-area">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Metals" {...a11yProps(1)} />
                <Tab label="Plastics" {...a11yProps(2)} />
                <Tab label="Stones" {...a11yProps(3)} />
              </Tabs>
            </div>
            <div className="search-area">
              <span className="gradient-button">
                <Button
                  classes={{ root: "search-button" }}
                  // onClick={deleteAccount}
                  color="primary"
                  autoFocus
                >
                  <SearchIcon />
                </Button>
              </span>
            </div>
          </div>
          <div className="content-area">
            <TabPanel value={value} index={0}>
              <div
                draggable
                onDragStart={e => {
                  e.dataTransfer.dropEffect = "link";
                  props.onSetSelectedMaterial("cherryPolished");
                }}
                className="material red"
              >
                Polished Cherry
              </div>
              <div
                draggable
                onDragStart={e => props.onSetSelectedMaterial("goldPolished")}
                onDragEnd={e => console.log(e.screenX, e.screenY)}
                // onDrag
                className="material gold"
              >
                Polished Gold
              </div>
              <div
                draggable
                onDragStart={e => props.onSetSelectedMaterial("purplePolished")}
                className="material purple"
              >
                Polished Purple
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

AppearancesBar.propTypes = {
  onSetSelectedMaterial: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSetSelectedMaterial: material =>
    dispatch(actions.setSelectedMaterial(material))
});

export default connect(null, mapDispatchToProps)(AppearancesBar);
