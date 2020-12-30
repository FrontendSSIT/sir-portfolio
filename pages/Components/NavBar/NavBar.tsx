import { Container, Nav, Navbar } from "react-bootstrap"
import Link from 'next/link'
export const NavBar = () => {
    return (
       <section>
           <Container>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link >
        <Link href="/" >about</Link>
      </Nav.Link>
      <Nav.Link >
        <Link href="/" >about</Link>
      </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </Container>
        </section>
    )
}
