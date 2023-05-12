import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import Logo from './Logo';

const MyNavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;