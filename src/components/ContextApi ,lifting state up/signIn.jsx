import React, { useContext } from "react";
import { FormContext } from "../../contexts/formapi";

const SignIn = () => {
  const [, setActive] = useContext(FormContext);
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => setActive(false)}>sign up</button>
    </div>
  );
};

export default SignIn;
