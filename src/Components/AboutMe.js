import styled from 'styled-components';
import ProfilePic from './../Assets/ProfilePic_May2023.jpg';

const AboutMe = () => {
  return (
    <SectionWrapper id="about">
      <StyledImage />

      <TextWrapper>
        <Title>About Me</Title>
        <Description>
          I'm a full-stack software engineer based in Cheney, WA.
          I specialize in web applications, .NET, and AWS.
        </Description>
        <Description>
          During my time in the software industry, I was often one of only 3 engineers at a given company.
          Therefore, I have honed a truly full-stack skill set.
        </Description>
      </TextWrapper>
    </SectionWrapper>
  );
};

export default AboutMe;

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: ${props => props.theme.sectionPadding || '50px'};
  width: 100%;
  background-color: ${props => props.theme.dark || 'black'};
  padding: ${props => props.theme.sectionPadding || '50px'};
`;

const StyledImage = styled.img.attrs({
  src: ProfilePic
})`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
`;

const Title = styled.h1`
  color: ${props => props.theme.light3 || 'white'};
  font-size: 3.5rem;
  font-weight: bold;
  white-space: nowrap;
  width: fit-content;
  border-bottom: ${props => `4px solid ${props.theme.primary || 'white'}`};
  margin-bottom: 1rem;
  align-self: center;
`;

const Description = styled.p`
  font-weight: 300;
  line-height: 30px;
  font-size: 1.5rem;
  color: ${props => props.theme.light2 || 'white'};
  margin: 1rem 0;
`;