const Particles_DotsAndLines = {
  fullScreen: false,
  background: {},
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 5
      },
      repulse: {
        distance: 175,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#2bc5e0"
    },
    links: {
      color: "#5f5d59",
      distance: 200,
      enable: true,
      opacity: 0.75,
      width: 2
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 50
    },
    opacity: {
      value: 0.75
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 5
      // anim: {
      //   enable: true,
      //   speed: 5,
      //   size_min: 5,
      //   sync: false
      // }
    }
  },
  detectRetina: true
};

export default Particles_DotsAndLines;