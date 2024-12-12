import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLink, FaUser } from 'react-icons/fa';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto">
                        {/* Other nav items can go here */}
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title={<><FaLink /> Quick Links</>} id="quick-links-dropdown">
                            <NavDropdown.Item as={Link} to="/link1">Link 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/link2">Link 2</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/link3">Link 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<><FaUser /> John Doe</>} id="profile-dropdown">
                            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
