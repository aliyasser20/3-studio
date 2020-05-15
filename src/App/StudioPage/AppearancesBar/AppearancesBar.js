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

import { materials } from "./materials";

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
      {value === index && <div className="custom-tab-content">{children}</div>}
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

  const metalComponents = [];
  const plasticComponents = [];
  const ceramicComponents = [];
  const tilesComponents = [];
  const stoneComponents = [];
  const woodComponents = [];

  materials
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .forEach(material => {
      const newMaterial = (
        <div
          key={material.name}
          draggable
          onDragStart={e => props.onSetSelectedMaterial(material.actionName)}
          className="material"
        >
          <img src={material.imgPath} alt={material.name} />
          <p className="material-label">{material.name}</p>
        </div>
      );

      if (material.group === "metals") {
        metalComponents.push(newMaterial);
      }

      if (material.group === "plastics") {
        plasticComponents.push(newMaterial);
      }

      if (material.group === "ceramics") {
        ceramicComponents.push(newMaterial);
      }

      if (material.group === "tiles") {
        tilesComponents.push(newMaterial);
      }

      if (material.group === "stones") {
        stoneComponents.push(newMaterial);
      }

      if (material.group === "woods") {
        woodComponents.push(newMaterial);
      }
    });

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
                <Tab label="Metals" {...a11yProps(0)} />
                <Tab label="Plastics" {...a11yProps(1)} />
                <Tab label="Ceramics" {...a11yProps(2)} />
                <Tab label="Stones" {...a11yProps(3)} />
                <Tab label="Tiles" {...a11yProps(4)} />
                <Tab label="Woods" {...a11yProps(5)} />
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
              {metalComponents}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {plasticComponents}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {ceramicComponents}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {stoneComponents}
            </TabPanel>
            <TabPanel value={value} index={4}>
              {tilesComponents}
            </TabPanel>
            <TabPanel value={value} index={5}>
              {woodComponents}
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
