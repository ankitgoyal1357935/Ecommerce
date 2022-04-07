
import React from 'react';
import { useDispatch } from 'react-redux';
import {NavDropdown, Nav,Navbar,Brand,Link,Item,Collapse,Container,}  from 'react-bootstrap';
import {logout} from "../../Action/authaction"

const Authheader = ()=>{

 return(
   <>
   <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">Shoppkart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/product">Products</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   </>
 )
}


export default Authheader;