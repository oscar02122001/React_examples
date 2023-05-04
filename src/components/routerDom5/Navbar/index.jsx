import React from "react";
import { Container, NavItem } from "../style";
import { NavLink, useHistory, useLocation } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <p className="titles">React router DOM-5 </p>
      <Container>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/service">Services</NavItem>
        <NavItem to="/locetion">Locetions</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Container>
      <button onClick={() => history.push("/about")}>?</button>
      <button onClick={() => history.goBack()}>back</button>
      <button onClick={() => history.goForward()}>go</button>
    </div>
  );
}
