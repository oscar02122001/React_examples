import React, { useContext } from "react";
import { FormContext } from "../../contexts/formapi";

const SignUp = () => {
  const [active, setActive] = useContext(FormContext);
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={() => setActive(true)}>sign in</button>
    </div>
  );
};

export default SignUp;
