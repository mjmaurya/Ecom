import React from 'react';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
export const Sidebar=({url})=>{

const Logout=()=>{
    localStorage.user=null;
    localStorage.role='';
    window.location.href='/';
}
    return(
        <div>
        <Nav vertical>
        <NavItem>
          <NavLink href={`${url}`}>DashBoard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`${url}/newproduct`}>Add New Product</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`${url}/products`}>Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={`${url}/users`}>Users</NavLink>
        </NavItem>
        <NavItem>
          <Button color="danger" onClick={Logout}>Logout</Button>
        </NavItem>
      </Nav>
        </div>
    )
}