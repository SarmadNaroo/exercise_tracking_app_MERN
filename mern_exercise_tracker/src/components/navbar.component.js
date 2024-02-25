import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MyNav() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Navbar.Brand as={NavLink} to="/">Exercise Tracker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" exact>Exercise List</Nav.Link>
      <Nav.Link as={NavLink} to="/create">Create Exercise</Nav.Link>
      <Nav.Link as={NavLink} to="/user">Create User</Nav.Link>
      <Nav.Link as={NavLink} to="/edit/:id">Edit Exercise</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default MyNav;
