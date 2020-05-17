import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, ThemeProvider, Tabs, Tab, Button } from "@material-ui/core";
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
  const [search, setSearch] = useState(false);
  const [searchField, setSearchField] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const metalComponents = [];
  const plasticComponents = [];
  const ceramicComponents = [];
  const tilesComponents = [];
  const stoneComponents = [];
  const fabricComponents = [];
  const woodComponents = [];
  const syntheticComponents = [];
  const otherComponents = [];
  const searchComponents = [];

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
          key={material.imgPath}
          draggable
          onDragStart={e => props.onSetSelectedMaterial(material.actionName)}
          className="material"
        >
          <img src={material.imgPath} alt={material.name} />
          <p className="material-label">
            {search ? material.name : material.name.slice(3)}
          </p>
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

      if (material.group === "fabric") {
        fabricComponents.push(newMaterial);
      }

      if (material.group === "woods") {
        woodComponents.push(newMaterial);
      }

      if (material.group === "synthetics") {
        syntheticComponents.push(newMaterial);
      }

      if (material.group === "other") {
        otherComponents.push(newMaterial);
      }

      if (material.name.includes(searchField)) {
        searchComponents.push(newMaterial);
      } else if (searchField.length === 0) {
        searchComponents.push(newMaterial);
      }
    });

  const searchButtonClasses = search ? "search-button active" : "search-button";

  return (
    <ThemeProvider theme={theme}>
      <div className="appearances-bar">
        <Paper classes={{ root: "custom-paper" }} elevation={3}>
          <div className="top-bar">
            <div className="title-area">
              <h4 className="title">Appearances</h4>
            </div>
            <div className="tab-area">
              {search ? (
                <input
                  autoFocus
                  type="text"
                  className="search-input"
                  placeholder="Search materials ..."
                  onChange={e => setSearchField(e.target.value)}
                />
              ) : (
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
                  <Tab label="Fabrics" {...a11yProps(5)} />
                  <Tab label="Woods" {...a11yProps(6)} />
                  <Tab label="Synthetics" {...a11yProps(7)} />
                  <Tab label="Other" {...a11yProps(8)} />
                </Tabs>
              )}
            </div>
            <div className="search-area">
              <span className="gradient-button">
                <Button
                  classes={{ root: searchButtonClasses }}
                  onClick={() => {
                    setSearch(!search);

                    if (search) {
                      setSearchField("");
                    }
                  }}
                  color="primary"
                  autoFocus
                >
                  <SearchIcon />
                </Button>
              </span>
            </div>
          </div>
          <div className="content-area">
            {search ? (
              <div className="search-content">
                <div className="custom-tab-panel">
                  <div className="custom-tab-content">{searchComponents}</div>{" "}
                </div>
              </div>
            ) : (
              <Fragment>
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
                  {fabricComponents}
                </TabPanel>
                <TabPanel value={value} index={6}>
                  {woodComponents}
                </TabPanel>
                <TabPanel value={value} index={7}>
                  {syntheticComponents}
                </TabPanel>
                <TabPanel value={value} index={8}>
                  {otherComponents}
                </TabPanel>
              </Fragment>
            )}
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
