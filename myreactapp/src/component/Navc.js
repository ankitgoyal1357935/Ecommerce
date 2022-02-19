
import {Navbar,Nav,Container} from "react-bootstrap";
import "./Navc.css";

const Navc = ()=>{

    return (

        <>
            <Navbar variant="dark" expand="lg" bg="primary">
                <Container>
                    <Navbar.Brand href="/home">ShoppKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Nav.Link href="#link">Register</Nav.Link>
                            <Nav.Link href="#link">Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navc;