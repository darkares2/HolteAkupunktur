import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to={'/'}>HolteAkupunktur</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
