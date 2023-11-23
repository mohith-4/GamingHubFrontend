import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.jpg";
import './Navigation.css';
  
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/Mainhome");
    }
    return (
        <Navbar style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }} expand="lg"  className="sticky-top mb:5">
            <Container className="container" style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' , color : "white" }} >
                <LinkContainer to="/Mainhome">
                    <Navbar.Brand>
                        <img src={logo} style={{ width: 50, height: 50, borderRadius:70}} />
                        
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar-brand">
                              
                    <LinkContainer to="/Mainhome">
                             <Nav.Link > <h5 style={{color:"white"}}>Home</h5></Nav.Link>
                        </LinkContainer>
                    
                        {!user && (
                            <>
                            <LinkContainer to="/faq">
                                <Nav.Link><h5 style={{color:"white"}}>FAQ</h5></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link><h5 style={{color:"white"}}>Login</h5></Nav.Link>
                            </LinkContainer>
                            

                       </>
                        )}
                       
                        {user && (

                            <>
                                <LinkContainer to="/explore">
                                    <Nav.Link><h5 style={{color:"white"}}>Explore</h5></Nav.Link>
                                </LinkContainer>
                                
                                <LinkContainer to="/chat">
                                    <Nav.Link><h5 style={{color:"white"}}>Chat</h5></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/rating">
                                    <Nav.Link><h5 style={{color:"white"}}>Rating</h5></Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/faq">
                                    <Nav.Link><h5 style={{color:"white"}}>FAQ</h5></Nav.Link>
                                </LinkContainer>

                            <NavDropdown style={{color : 'white'}}
                                title={
                                    <>
                                        <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                        <span style={{ color: 'white' }}>{user.name}</span>
                                    </>
                                }
                                id="basic-nav-dropdown"
                            >
                                

                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>

                            </>
                        )}

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;