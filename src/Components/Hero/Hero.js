import { styled } from 'styled-components';
import TerminalAnimation from './TerminalAnimation';
import resume from './../../Assets/Resume.pdf';
import Button from 'react-bootstrap/Button';
import ParticleBackground from '../Particles/ParticlesBackground';

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <MainText>Bryan Caesar</MainText>

      <TerminalAnimation />

      <ResumeDownloadButton variant='success' size="lg">
        Download Resume
      </ResumeDownloadButton>

      <ParticleBackground variant='WildLines' />
    </SectionWrapper>
  );
};

export default Hero;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 100vh;

  background-color: black;
  padding: ${props => props.theme.sectionPadding || '50px'};

  position: static;
  z-index: 1;
`;

const MainText = styled.h1`
  background-color: black;
  color: ${props => props.theme.light3 || 'white'};

  text-align: center;
  font-size: clamp(3.3rem, 10vw, 6.5rem);
  font-weight: bold;
  
  padding: 1.5rem;
  border: ${props => `5px solid ${props.theme.primary}`};
`;

const ResumeDownloadButton = styled(Button).attrs({
  href: resume,
  download: "Resume_BryanCaesar.pdf"
})`
  // CSS
`;