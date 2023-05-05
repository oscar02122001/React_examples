import React from "react";
import { Container, NavItem, Style } from "../style";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { navbar } from "../navbar";

export default function Navbar() {
  // const history = useHistory();
  const navigate = useNavigate();
  return (
    <div>
      <p className="titles">React router DOM-5 </p>
      <>
        <Container>
          <NavItem to={"/home"}>Home</NavItem>
          <NavItem to={"/about"}>About</NavItem>
          <NavItem to={"/service"}>Services</NavItem>
          <NavItem to={"/locetion"}>Location</NavItem>
          <NavItem to={"/contact"}>Contact</NavItem>
        </Container>
      </>
      <button onClick={() => navigate("/home")}>?</button>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate(1)}>go</button>
      <Outlet />
    </div>
  );
}
