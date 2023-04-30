import React, { useContext } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";
import Body from "./Body";
import Navbar from "./Navbar";
import { FormContext } from "../../contexts/formapi";

const Render = () => {
  const [active] = useContext(FormContext);
  return (  
    <div>
      <p className="titles"> ContextApi vs Lifting state up</p>
      {active ? <SignIn /> : <SignUp />}
      <Navbar />
      <Body />
    </div>
  );
};
export default Render;
