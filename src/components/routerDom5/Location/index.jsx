import React from "react";
import { useNavigate } from "react-router-dom";

export default function Location() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/contact");
    localStorage.setItem("token", false);
  };
  return (
    <div>
      <h1>Location component</h1>
      <button onClick={logOut}>log out</button>
    </div>
  );
}
