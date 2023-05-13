import React, { useContext } from "react";
import { StudentContext } from "../../contexts/contextapi";
import { CountContext } from "../../contexts/countapi";

const Navbar = () => {
  const [users] = useContext(StudentContext);
  const [count] = useContext(CountContext);
  console.log('sdcsdc');
  return (
    <div
      style={{
        background: " blue",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Count: {count}</h1>
      <h1>StudentsNav: {users.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Navbar;
