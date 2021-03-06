import React from 'react';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigator extends React.Component{
  render() {
    return (
    <Navbar inverse fixedTop toggleNavKey={0}>
    <NavBrand><a href="#">React-Bootstrap</a></NavBrand>
    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    );
  }
}

export default Navigator;