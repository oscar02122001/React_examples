import React, { useRef } from "react";

function Uncontrolled() {
  const input = useRef("");

  return (
    <div>
      <h1>Uncontrolled: Look alert</h1>
      <input ref={input} type="text" />{" "}
      <button
        onClick={() => {
          alert(input.current.value);
        }}
      >
        click
      </button>
    </div>
  );
}

export default Uncontrolled;
