import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Top.css';
import logo from '../../assets/logo.svg';
import addCart from '../../assets/addCart.svg';
import Ellipse from '../../assets/Ellipse.svg';

export default function Top() {
  
  return(
    <Container fluid className="custom-header-container position-relative">
      <img className="position-absolute top-0 start-0 effect" src={Ellipse} alt="" />
      <Navbar expand="lg" className="custom-navbar">
        <div className='container'>
          <Navbar.Brand href="/" className='align-items-center brand-responsive'>
            <img className='logo-img' width={176} height={66} src={logo} alt='logo'/>
          </Navbar.Brand>
          <div className="navbar-menu justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler bg-light  primary-color' />
            <Navbar.Collapse color='white' id="basic-navbar-nav" className='align-self-end justify-content-end responsive-dropdown'>
              <Nav className="m-nav align-items-center justify-content-space-between">
                <Nav.Link href="/" className="me-4 primary-color font-normal full-width">
                  <img src={addCart} width={32} height={34} alt="AddCart" />
                </Nav.Link>
                <Nav.Link href="/" className="me-4 bg-color-1 border rounded-2 text-white fs-5-2 fw-semibold px-4 font-normal full-width">
                  Become a Local Expert
                </Nav.Link>
                <Nav.Link href="" className="me-4 text-color-1 font-normal fw-bold full-width">
                  Login
                </Nav.Link>
                <Nav.Link href="/" className="me-4 bg-color-1 border rounded-2 text-white fs-5-2 fw-semibold px-4 font-normal full-width">
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </Container>
  )
}