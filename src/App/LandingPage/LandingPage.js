import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Button } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";

import Particles from "react-particles-js";
import PenguinIcon from "../UI/SVGIcons/PenguinIcon";

import { useAuth0 } from "../../react-auth0-spa";

import "./LandingPage.scss";

const LandingPage = props => {
  const { loginWithRedirect } = useAuth0();

  const handleLinux = () => {
    const a = document.createElement("a");
    document.body.append(a);
    a.style = "display: none";
    a.href =
    // https://drive.google.com/uc?id=1jeDXDeyFShl82Rv3tMdbOJO0854uRtRy&export=download
      "https://drive.google.com/uc?id=1jeDXDeyFShl82Rv3tMdbOJO0854uRtRy&export=download";
    a.download = "3Studio";
    a.click();
    // document.body.removeElement(a);
  };

  const handleMac = () => {
    const a = document.createElement("a");
    document.body.append(a);
    a.style = "display: none";
    a.href =
      "https://drive.google.com/uc?id=1akY1_Fb1XGO398XrONhGNnNT-KyXQk1y&export=download";
    a.download = "3Studio";
    a.click();
    // document.body.removeElement(a);
  };

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
                Unleash your inner creativity with 3D designing.
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
                    onClick={() => handleMac()}
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
      <div className="models-section">
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <div className="models-container">
            <h2 className="section-title">Models</h2>
            <p className="section-description">
              Create new projects with your own models or try out one of our
              demo defaults.
            </p>
            <video autoPlay loop>
              <source src="/assets/car-rotation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
      <div className="media-section">
        <Container maxWidth="lg" classes={{ root: "container-padding" }}>
          <div className="media-container">
            <h2 className="section-title">Media</h2>
            <div className="section-content">
              <p className="section-description">
                Adjust your work area (lights, environment, and more) to match
                your needs, take and save screenshots, download a video of your
                model, and share with friends and colleagues!
              </p>
              <video autoPlay loop>
                <source src="/assets/wolfywolf.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
  currentThemeDetailed: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentThemeDetailed: state.themes.currentThemeDetailed
});

export default connect(mapStateToProps, null)(LandingPage);
