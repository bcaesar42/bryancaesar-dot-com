import awsLogo from "./../../../Assets/BackgroundSvgs/AwsLogo.svg";
import cSharpLogo from "./../../../Assets/BackgroundSvgs/CSharpLogo.svg";
import dockerLogo from "./../../../Assets/BackgroundSvgs/DockerLogo.svg";
import githubLogo from "./../../../Assets/BackgroundSvgs/GithubLogo.svg";
import reactLogo from "./../../../Assets/BackgroundSvgs/ReactLogo.svg";
import sqlServerLogo from "./../../../Assets/BackgroundSvgs/SqlServerLogo.svg";
import visualStudioLogo from "./../../../Assets/BackgroundSvgs/VisualStudioLogo.svg";
import vsCodeLogo from "./../../../Assets/BackgroundSvgs/VSCodeLogo.svg";

// Docs for configuring particles:
//  https://particles.js.org/docs/index.html
//  https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html

const Particles_Icons = {
  fullScreen: false,
  background: {},
  particles: {
    number: {
      value: 16,
      density: {
        enable: true,
        value_area: 800
      }
    },
    // color: {
    //   value: "#ffff00",
    //   animation: {
    //     enable: true,
    //     speed: 30,
    //     sync: true
    //   }
    // },
    shape: {
      type: [
        "image"
      ],
      image: [
        {
          "src": awsLogo
        },
        {
          "src": cSharpLogo
        },
        {
          "src": dockerLogo
        },
        {
          "src": githubLogo
        },
        {
          "src": reactLogo
        },
        {
          "src": sqlServerLogo
        },
        {
          "src": visualStudioLogo
        },
        {
          "src": vsCodeLogo
        },
      ]
    },
    size: {
      value: 35,
      random: false,
      anim: {
        enable: false
        // enable: true,
        // speed: 5,
        // size_min: 10,
        // sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1.5,
      out_mode: "out",
      bounce: false
    }
  }
};

export default Particles_Icons;