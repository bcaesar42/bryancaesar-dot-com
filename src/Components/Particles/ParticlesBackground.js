import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { styled } from 'styled-components';

import Particles_Icons from './Options/Particles_Icons';
import Particles_DotsAndLines from './Options/Particles_DotsAndLines';

const particleOptions = {
  WildLines: Particles_DotsAndLines,
  Icons: Particles_Icons
};

const ParticlesBackground = ({variant}) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);

  return (
    <StyledParticles
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions[variant] || Particles_DotsAndLines}
    />
  );
};

export default ParticlesBackground;

// Important note: Wherever this component is used, its parent element must set a CSS position style.
// This is required because "position: absolute" requires position to be set in a parent element.
// Example: "position: relative" or "position: static"
const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;