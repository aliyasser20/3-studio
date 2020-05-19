import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Container,
  MenuItem,
  Select,
  Paper,
  Snackbar,
  Button,
  Dialog,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";

import Particles from "react-particles-js";
import PenguinIcon from "../UI/SVGIcons/PenguinIcon";

import { useAuth0 } from "../../react-auth0-spa";

import "./LandingPage.scss";

const LandingPage = props => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="landing-page">
      <Particles
        className="background"
        width="100vw"
        height="100vh"
        params={{
          background: {
            color: "#171717"
          },
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            },
            color: {
              value: {
                h: Number(props.currentThemeDetailed.hslColor.topFirst),
                s: Number(
                  props.currentThemeDetailed.hslColor.topSecond.slice(
                    0,
                    props.currentThemeDetailed.hslColor.topSecond.length - 1
                  )
                ),
                l: Number(
                  props.currentThemeDetailed.hslColor.topThird.slice(
                    0,
                    props.currentThemeDetailed.hslColor.topThird.length - 1
                  )
                )
              }
            },
            lineLinked: {
              color: {
                value: {
                  h: Number(props.currentThemeDetailed.hslColor.bottomFirst),
                  s: Number(
                    props.currentThemeDetailed.hslColor.bottomSecond.slice(
                      0,
                      props.currentThemeDetailed.hslColor.bottomSecond.length -
                        1
                    )
                  ),
                  l: Number(
                    props.currentThemeDetailed.hslColor.bottomThird.slice(
                      0,
                      props.currentThemeDetailed.hslColor.bottomThird.length - 1
                    )
                  )
                }
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <div className="hero">
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <div className="hero-container">
            <div className="left">
              <h1 className="title">3 Studio</h1>
              <p className="description">
                Explore your creative three dimensional side.
              </p>
              <div className="buttons-area">
                <span className="gradient-button">
                  <Button
                    variant="contained"
                    onClick={() => loginWithRedirect({})}
                  >
                    Get Started
                  </Button>
                </span>
                <span className="gradient-button">
                  <Button
                    variant="contained"
                    startIcon={<AppleIcon />}
                    // onClick={() => {
                    //   if (!disabled) {
                    //     resetPassword();
                    //   }
                    // }}
                  >
                    Mac OS
                  </Button>
                </span>
                <span className="gradient-button">
                  <Button
                    variant="contained"
                    startIcon={<PenguinIcon />}
                    // onClick={() => {
                    //   if (!disabled) {
                    //     resetPassword();
                    //   }
                    // }}
                  >
                    Linux OS
                  </Button>
                </span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/rocket.png" alt="rocket model" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  currentThemeDetailed: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentThemeDetailed: state.themes.currentThemeDetailed
});

export default connect(mapStateToProps, null)(LandingPage);
