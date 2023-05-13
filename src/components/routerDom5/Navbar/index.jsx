import React, { useEffect, useState } from "react";
import { Container, NavItem } from "../style";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../navbar";

export default function Navbar() {
  // const history = useHistory();
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <p className="titles">React router DOM-5 </p>
      <>
        <Container>
          {navbar.map((item) => {
            return (
              <NavItem active={path === item.path} to={item.path}>
                {item.name}
              </NavItem>
            );
          })}
          {/* <NavItem to={"/home"}>Home</NavItem>
          <NavItem to={"/about"}>About</NavItem>
          <NavItem to={"/service"}>Services</NavItem>
          <NavItem to={"/locetion"}>Location</NavItem>
          <NavItem to={"/contact"}>Signin</NavItem> */}
        </Container>
      </>
      <button onClick={() => navigate("/home")}>?</button>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate(1)}>go</button>
      <Outlet />
    </div>
  );
}
