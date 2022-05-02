import { signOut } from 'firebase/auth';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom'
import auth from '../../firebase.init';

const NavBar = () => {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    return (
        <Navbar style={pathname.includes('login') || pathname.includes('signup') ? { display: 'none' } : { display: 'block' }} collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        src="https://i.ibb.co/0fGQ97H/logo2-1.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Pocket Gadget logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/manage-inventories">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                        <Nav.Link as={Link} to="/my-items">My items</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {user ? <Nav.Link as={Link} onClick={() => signOut(auth)} to="/">Logout</Nav.Link> : <> <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar