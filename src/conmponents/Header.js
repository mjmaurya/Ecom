import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid" color="light">
      {
        localStorage.user!=='null' ?
        localStorage.role === 'user' ?
        <Navbar light expand="md">
        <NavbarBrand href="/">MyGrocery</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/allproducts">Products</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
            <div className="d-flex">
            <NavLink href="/login">
            <Button onClick={()=> {localStorage.user=null
            localStorage.role=""
            }} className="btn-danger">Logout</Button>
            </NavLink>
            <NavLink href="/cart">
            <Button className="btn-primary">Cart</Button>
            </NavLink>
            </div> 
      </Navbar>
      :
      <Navbar light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/allproducts">Products</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
        :
        <Navbar light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/allproducts">Products</NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex" style={{alignItems:'right'}}>
            <NavLink href="/login">
            <Button className="btn-danger">Login</Button>
            </NavLink>
            <NavLink href="/register">
            <Button className="btn-primary">Register</Button>
            </NavLink>
            </div>
        </Collapse>
            
          
      </Navbar>
      }
      
    </div>
  );
}

export default Header;