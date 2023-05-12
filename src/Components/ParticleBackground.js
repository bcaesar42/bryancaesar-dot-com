import { React, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesConfig } from "./../Config/ParticlesConfig-MainBackground";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesConfig}
    />
  );
};

export default ParticleBackground;