import { useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Experience from './Experience/Experience';
import Education from './Education';
import Skills from './Skills/Skills';

const tabs = {
  Experience: <Experience />,
  Skills: <Skills />,
  Education: <Education />,
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <SectionWrapper id="resume">
      <Title>My Resume</Title>

      <Nav variant="pills" defaultActiveKey="Experience" justify>
        {Object.keys(tabs).map(tabName =>
          <StyledNavItem key={tabName}>
            <StyledNavLink
              eventKey={tabName}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </StyledNavLink>
          </StyledNavItem>
        )}
      </Nav>

      <Divider />

      {tabs[activeTab]}
    </SectionWrapper>
  );
};

export default Resume;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background-color: ${props => props.theme.dark2 || 'black'};
  padding: ${props => props.theme.sectionPadding || '50px'};
`;

const Title = styled.h1`
  color: ${props => props.theme.light3 || 'white'};
  font-size: 3rem;
  font-weight: bold;
  white-space: nowrap;
  width: fit-content;
  border-bottom: ${props => `4px solid ${props.theme.primary || 'white'}`};
`;

const Divider = styled.div`
  height: 5px;
  width: 50%;
  border-radius: 50px;
  background-color: ${props => props.theme.dark || 'black'};
`;

const StyledNavItem = styled(Nav.Item)`
  margin: 1rem;
`;

const StyledNavLink = styled(Nav.Link)`
  &&.active {
    color: ${props => props.theme.dark || 'black'};
  }

  &:not(.active) {
    background-color: ${props => props.theme.dark3 || 'darkgray'};
    color: ${props => props.theme.light3 || 'white'};
  }
`;