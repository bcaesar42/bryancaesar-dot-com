import { useState } from 'react';
import styled from 'styled-components';
import workHistory from './WorkHistory.json';
import Nav from 'react-bootstrap/Nav';
import JobDetails from './JobDetails';

const Experience = () => {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  return (
    <div>
      <Nav className="flex-column" variant="pills" defaultActiveKey="0">
        {workHistory.map((job, index) =>
          <StyledNavItem key={job.Employer}>
            <Nav.Link
              eventKey={index}
              onClick={() => setActiveJobIndex(index)}
              as={StyledNavLink}
            >
              {job.Employer}
            </Nav.Link>
          </StyledNavItem>
        )}
      </Nav>
      
      <JobDetails job={workHistory[activeJobIndex]} />
    </div>
  );
}

export default Experience;

const StyledNavItem = styled(Nav.Item)`
  margin: 1rem;
`;

const StyledNavLink = styled.button`
  width: 100%;
`;