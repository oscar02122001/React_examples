import React, { useState } from "react";

function Controlled() {
  const [input, setInput] = useState();
  
  return (
    <div>
      <h1>Controlled:{input}</h1>
      <input
        onChange={({ target: { value } }) => setInput(value)}
        type="text"
      />
    </div>
  );
}

export default Controlled;
