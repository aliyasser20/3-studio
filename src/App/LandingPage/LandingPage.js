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
  DialogTitle,
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";

import Particles from "react-particles-js";
import PenguinIcon from "../UI/SVGIcons/PenguinIcon";

import { useAuth0 } from "../../react-auth0-spa";

import "./LandingPage.scss";

const LandingPage = (props) => {
  const { loginWithRedirect } = useAuth0();

  const handleLinux = () => {
    const a = document.createElement("a");
    document.body.append(a);
    a.style = "display: none";
    a.href =
      "https://drive.google.com/uc?id=1MokBUfCoNlvmiAjLylznyL8apCp-8p1U&export=download";
    a.download = "3Studio";
    a.click();
    document.body.removeElement(a);
  };
  return (
    <div className="landing-page">
      <Particles
        className="background"
        width="100vw"
        height="100vh"
        params={{
          background: {
            color: "#171717",
          },
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
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
                ),
              },
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
                  ),
                },
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
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
                    onClick={() => handleLinux()}
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
      <div className="materials-section">
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <div className="materials-container">
            <h2 className="section-title">Appearances</h2>
            <p className="section-description">
              Choose and apply appearances from 80+ materials. <br /> From
              metals to plastics, ceramics, fabrics, stones, and much more …
              we’ve got you covered!
            </p>
            <img
              src="./assets/materials.png"
              alt="materials"
              className="materials"
            />
          </div>
        </Container>
      </div>
      <div className="developers-section">
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <div className="developers-container">
            <h2 className="section-title">Developers</h2>
            <div className="section-content-developers">
              <div className="developer">
                <img src="/assets/ali.jpg" alt="ali sayed" />
                <a
                  href="https://github.com/aliyasser20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Ali Sayed</h3>
                </a>
              </div>
              <div className="developer">
                <img src="/assets/jay.png" alt="jay burbyga" />
                <a
                  href="https://github.com/Jaybur1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Jay Burbyga</h3>
                </a>
              </div>
              <div className="developer">
                <img src="/assets/ahmed.jpg" alt="ahmed alwardani" />
                <a
                  href="https://github.com/ahmedalwardani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Ahmed Alwardani</h3>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <footer>
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <p className="title">3 Studio</p>
          <div className="line"></div>
          <span className="copyright">
            &copy; 2020 Ali Sayed, Jay Burbyga, Ahmed Alwardani - All Rights
            Reserved
          </span>
        </Container>
      </footer>
    </div>
  );
};

LandingPage.propTypes = {
  currentThemeDetailed: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentThemeDetailed: state.themes.currentThemeDetailed,
});

export default connect(mapStateToProps, null)(LandingPage);
