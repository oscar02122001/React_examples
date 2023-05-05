import React from "react";
import { useNavigate } from "react-router-dom";

export default function Privet({ children }) {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  return <div>{token ? children : navigate("/contact")}</div>;
}
