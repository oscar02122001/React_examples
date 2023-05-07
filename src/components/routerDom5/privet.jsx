import React from "react";
import { Navigate } from "react-router-dom";

const Privet = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return <div>{token ? children : <Navigate to={"/contact"} />}</div>;
}

export default Privet;
