import React from "react";
import Particles from "react-particles-js";

const LandingPage = () => (
  <div className="landing-page">
   LandingPage
    {/* <Particles
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
                h: Number(props.currentTheme.hslColor.topFirst),
                s: Number(
                  props.currentTheme.hslColor.topSecond.slice(
                    0,
                    props.currentTheme.hslColor.topSecond.length - 1
                  )
                ),
                l: Number(
                  props.currentTheme.hslColor.topThird.slice(
                    0,
                    props.currentTheme.hslColor.topThird.length - 1
                  )
                ),
              },
            },
            lineLinked: {
              color: {
                value: {
                  h: Number(props.currentTheme.hslColor.bottomFirst),
                  s: Number(
                    props.currentTheme.hslColor.bottomSecond.slice(
                      0,
                      props.currentTheme.hslColor.bottomSecond.length - 1
                    )
                  ),
                  l: Number(
                    props.currentTheme.hslColor.bottomThird.slice(
                      0,
                      props.currentTheme.hslColor.bottomThird.length - 1
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
      /> */}
  </div>
);

export default LandingPage;
