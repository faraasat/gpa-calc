import { NextComponentType } from "next";
import Particles from "react-tsparticles";

const ParticlesComponent: NextComponentType = () => {
  return (
    // <div></div>
    <Particles
      id="tsparticles"
      options={
        {
          background: {
            color: {
              value: "#fff",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              grab: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: "random",
            },
            links: {
              color: {
                value: "rgb(255, 194, 61)",
              },
              distance: 150,
              enable: true,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
                default: "bounce"
              },
            },
            number: {
              density: {
                enable: true,
              },
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0
              },
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
                minimumValue: 5
              },
              value: {
                min: 0.1,
                max: 9,
              },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
              },
            },
          },
        }
        //   {
        //   background: {
        //     color: {
        //       value: "#ffffff",
        //     },
        //     position: "50% 50%",
        //     repeat: "no-repeat",
        //     size: "cover",
        //   },
        //   fullScreen: {
        //     zIndex: 1,
        //   },
        //   interactivity: {
        //     events: {
        //       onClick: {
        //         enable: true,
        //         mode: "push",
        //       },
        //       onDiv: {
        //         selectors: "#repulse-div",
        //         mode: "repulse",
        //       },
        //       onHover: {
        //         enable: true,
        //         mode: "connect",
        //         parallax: {
        //           force: 60,
        //         },
        //       },
        //     },
        //     modes: {
        //       bubble: {
        //         distance: 400,
        //         duration: 2,
        //         opacity: 0.8,
        //         size: 40,
        //       },
        //       grab: {
        //         distance: 400,
        //       },
        //     },
        //   },
        //   particles: {
        //     color: {
        //       value: "random",
        //     },
        //     links: {
        //       color: {
        //         value: "#ffffff",
        //       },
        //       distance: 150,
        //       opacity: 0.4,
        //     },
        //     move: {
        //       attract: {
        //         rotate: {
        //           x: 600,
        //           y: 1200,
        //         },
        //       },
        //       enable: true,
        //       outModes: {
        //         bottom: "out",
        //         left: "out",
        //         right: "out",
        //         top: "out",
        //       },
        //       speed: 2,
        //     },
        //     number: {
        //       density: {
        //         enable: true,
        //       },
        //       limit: 500,
        //       value: 300,
        //     },
        //     opacity: {
        //       value: 0.5,
        //       animation: {
        //         speed: 1,
        //         minimumValue: 0.1,
        //       },
        //     },
        //     size: {
        //       random: {
        //         enable: true,
        //       },
        //       value: {
        //         min: 1,
        //         max: 10,
        //       },
        //       animation: {
        //         speed: 5,
        //         minimumValue: 0.1,
        //       },
        //     },
        //   },
        // }
      }
    />
  );
};

export default ParticlesComponent;
