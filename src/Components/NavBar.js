import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Logo';

const MyNavBar = () => {
  return (
    <Navbar fixed="top" expand="md" bg="dark3" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link as={StyledNavLink} href="#hero">Home</Nav.Link>
            <Nav.Link as={StyledNavLink} href="#about">About</Nav.Link>
            <Nav.Link as={StyledNavLink} href="#resume">Resume</Nav.Link>
            <Nav.Link as={StyledNavLink} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

const StyledNavLink = styled.a`
  // The "&&&" part is to increase the CSS specificity so it takes priority over the react-bootstrap style.
  &&& {
    color: ${props => props.theme.primary || 'white'};
    
    font-size: 1.25rem;
    font-weight: bold;

    border-bottom: 2px solid white;
    padding-bottom: .1rem;
  }
`;