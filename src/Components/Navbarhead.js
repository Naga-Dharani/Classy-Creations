import React from 'react'
import "./Navbarhead.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import {Link,} from 'react-router-dom'

import {FaSearch,FaHeart,FaUser,FaShoppingBag } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'




export default function Navbarhead() {  
  return (
    <div>
      <h6 className='line1'>GET EXTRA 5% OFF SITEWIDE</h6>
      <br/>

      {/* -------------------------------------------------------Navbar------------------------------------------------------------------ */}

      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home"><img src={ require("../assets/media/images/logo.png")} width="100%" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
           <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/newin"}>NEW IN</Nav.Link>
            <Nav.Link as={Link} to={"/festive"}><i>FESTIVE<sup>*</sup></i></Nav.Link>
            <Nav.Link as={Link} to={"/dining"}>DINING</Nav.Link>
            <Nav.Link as={Link} to={"/kitchen"}>KITCHEN</Nav.Link>
            <Nav.Link as={Link} to={"/decor"}>DECOR</Nav.Link>
            <Nav.Link as={Link} to={"/bath"}>BATH</Nav.Link>
            <Nav.Link as={Link} to={"/softfurnishing"}>SOFTFURNISHING</Nav.Link>
            <Nav.Link as={Link} to={"/glassware"}>GLASSWARE</Nav.Link>
            
            <Nav.Link href="#link"><FaSearch/></Nav.Link>
            <Nav.Link href="#link"><FaHeart /></Nav.Link>
            <Nav.Link href="#link"><FaUser/></Nav.Link>
            <Nav.Link href="#link"><FaShoppingBag/></Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    























    </div>
  )
}
