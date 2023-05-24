import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar">
        <Link to={"/"}>
          <h1>Viento Sur</h1>
        </Link>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"Item"} to={"/categoria/2"}>Abrigos</NavLink>
            <NavLink className={"Item"} to={"/categoria/3"}>Accesorios</NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
