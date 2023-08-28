import styled from "styled-components";

const Logo = () => {
  return (
    <StyledText>
      BC
    </StyledText>
  );
};

export default Logo;

const StyledText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary || 'white'};
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.5rem;
  
  border: .2rem solid ${props => props.theme.primary || 'white'};
  padding: .5rem;
`;
