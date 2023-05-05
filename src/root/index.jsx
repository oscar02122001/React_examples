import { useState } from "react";
import App from "../components/CRUD/State";
import Render from "../components/ContextApi ,lifting state up/render";
import Hooks from "../components/useEffect/Hooks";
import Count from "../components/useState, useReducer/count";
import Index from "../components/useRef";
import Slider from "../components/slider/slider";
import Navbar from "../components/routerDom5/Navbar/index";
import Privet from "../components/routerDom5/privet";
// import { navbar } from "../components/routerDom5/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/routerDom5/Home";
import About from "../components/routerDom5/About";
import Services from "../components/routerDom5/Services";
import Location from "../components/routerDom5/Location";
import Contact from "../components/routerDom5/Contact";

export default function Root() {
  let token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <App />
      <Hooks />
      <Count />
      <Render />
      <Index />
      <Slider />
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Navbar />}>
          <Route path={"/"} element={<Navigate to={"/home"} />}></Route>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/service"} element={<Services />} />
          <Route
            path={"/locetion"}
            element={
              <Privet>
                <Location />
              </Privet>
            }
          />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"*"} element={<h1>404 not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
