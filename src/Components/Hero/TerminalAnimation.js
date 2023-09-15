import styled from 'styled-components';
import Typed from 'react-typed';

const StringsToType = [
  "Software Engineer",
  "Full-Stack Engineer",
  "Software Architect",
  ".NET Engineer",
  "React Developer",
  "Unit Tester"
];

const TerminalAnimation = () => (
  <Wrapper>
    <Icon>{">_"}</Icon>
    <VerticalDivider />
    <TypeWriter
      strings={StringsToType}
      typeSpeed={70}
      backSpeed={30}
      backDelay={1700}
      cursorChar={"_"}
      loop
    />
  </Wrapper>
);

export default TerminalAnimation;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${props => props.theme.dark || 'black'};

  padding: 1rem;
  width: 90%;
  max-width: 875px;
  height: clamp(95px, 25vw, 240px);

  border-radius: 2rem;
`;

const Icon = styled.h1`
  color: ${props => props.theme.primary || 'lightblue'};
  font-weight: bold;
  font-size: clamp(2rem, 7vw, 8rem);
  font-family: sans-serif;
`;

const VerticalDivider = styled.div`
  height: 90%;
  border-left: 2px solid grey;
`;

const TypeWriter = styled(Typed)`
  color: ${props => props.theme.light3 || 'white'};

  font-size: clamp(1rem, 7vw, 4rem);
  letter-spacing: .15rem;
`;