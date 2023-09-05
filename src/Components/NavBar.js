import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Logo';

const MyNavBar = () => {
  return (
    <Navbar sticky="top" expand="md" bg="dark3" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <StyledNavLink href="#home">Home</StyledNavLink>
            <StyledNavLink href="#about">About</StyledNavLink>
            <StyledNavLink href="#contact">Contact</StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

const StyledNavLink = styled(Nav.Link)`
  // The "&&&" part is to increase the CSS specificity so that it takes priority over the react-bootstrap style.
  &&& {
    color: ${props => props.theme.primary || 'white'}
  }
`;