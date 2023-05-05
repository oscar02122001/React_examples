import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const onSave = () => {
    if (login.current.value === "oscar" && pasword.current.value === "1234") {
      localStorage.setItem("token", true);
      navigate("/locetion");
    } else {
      localStorage.setItem("token", false);
      alert("Parol yoki login xato");
    }
  };
  const login = useRef("");
  const pasword = useRef("");
  const navigate = useNavigate();
  return (
    <div>
      <h1>Signin component</h1>
      <input ref={login} type="text" />
      <input ref={pasword} type="text" />
      <button onClick={onSave}>login</button>
    </div>
  );
}
