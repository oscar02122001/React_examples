import React from "react";
import { Container, NavItem } from "./style";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <NavItem activeStyle={{ color: "red" }} to="/home">
        Home
      </NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/about">
        About
      </NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/service">
        Services
      </NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/locetion">
        Locetions
      </NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/contact">
        Contact
      </NavItem>
    </Container>
  );
}
