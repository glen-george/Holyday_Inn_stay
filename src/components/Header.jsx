import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

 



function Header() {


  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);
   const navigate = useNavigate();



    const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <>
  
   
         <Navbar expand="lg" className="bg-success sticky-top">
      <Container>
       <Navbar.Brand>
  <Link to="/" className="text-white fw-bolder fs-4 text-decoration-none"> <i>HolidayINN</i></Link>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">



          <Nav className="ms-auto gap-5 d-flex align-items-center">
  <Link to="/" className="nav-link-custom">Home</Link>
  {/* <Link to="/booking/:id" className="nav-link-custom">Booking</Link> */}
  <Link to="/hotels" className="nav-link-custom">Hotels</Link>

 {/* Visible only for logged-in users */}
  {currentUser && (
    <Nav.Link as={Link} to="/mybookings" className="text-warning" >
      My Bookings
    </Nav.Link>
  )}

  {/* Guest Links */}
  {!currentUser ? (
    <>
      <Nav.Link as={Link} to="/login" className="btn btn-outline-warning fw-bolder">
        Login 
      </Nav.Link>

      <Nav.Link as={Link} to="/register" className="btn btn-outline-warning fw-bolder ">
        Register
      </Nav.Link>
    </>
  ) : (
    <Nav.Link  className="btn btn-outline-danger"  onClick={handleLogout}>
      Logout
    </Nav.Link>
  )}
   
    
</Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
