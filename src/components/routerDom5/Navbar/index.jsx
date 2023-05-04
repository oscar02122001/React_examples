import React from "react";
import { Container, NavItem } from "../style";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/service">Services</NavItem>
      <NavItem to="/locetion">Locetions</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Container>
  );
}
