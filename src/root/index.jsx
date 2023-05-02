import React from "react";
import App from "../components/CRUD/State";
import Render from "../components/ContextApi ,lifting state up/render";
import Hooks from "../components/useEffect/Hooks";
import Count from "../components/useState, useReducer/count";
import Index from "../components/useRef";
import Slider from "../components/slider/slider";
import Navbar from "../components/routerDom5";
export default function Root() {
  return (
    <div>
      <App />
      <Hooks />
      <Count />
      <Render />
      <Index />
      <Slider />
      <Navbar />
    </div>
  );
}
