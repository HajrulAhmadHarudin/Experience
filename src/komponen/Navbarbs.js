import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'


export const Navbarbs = () => {
    return (
        <Navbar expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand href="#">BelanjaBoss</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end ">
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        
                        {/* style={{ color: "white" }} */}
                       
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                       

                        <NavDropdown title="Product" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default Navbarbs;