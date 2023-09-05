import { styled } from "styled-components";

const Education = () => {
  return (
    <EducationWrapper>
      <SecondaryText>Recieved a</SecondaryText>
      <PrimaryText>Bachelor of Computer Science</PrimaryText>
      <SecondaryText>degree from</SecondaryText>
      <PrimaryText>Eastern Washington University</PrimaryText>
      <SecondaryText>in August 2020</SecondaryText>
    </EducationWrapper>
  );
};

export default Education;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.dark || 'black'};
  padding: 20px;
  border-radius: 20px;
`;

const PrimaryText = styled.h1`
  color: ${props => props.theme.primary || 'white'}
`;

const SecondaryText = styled.h4`
  color: ${props => props.theme.light2 || 'white'};
`;