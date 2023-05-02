import React from "react";
import Controlled from "./controlled";
import Uncontrolled from "./uncontrolled";

function Index() {
  return (
    <div>
      <p className="titles">useRef</p>
      <div style={{ display: "flex", flexDirection:"column" }}>
        <Controlled />
        <Uncontrolled />
      </div>
    </div>
  );
}

export default Index;
