// import { useState } from "react";
import App from "../components/CRUD/State";
import Render from "../components/ContextApi ,lifting state up/render";
import Hooks from "../components/useEffect/Hooks";
import Count from "../components/useState, useReducer/count";
import Index from "../components/useRef";
import Slider from "../components/slider/slider";
import Navbar from "../components/routerDom5/Navbar/index";
import React18V from "../components/react 18v";
import Fetch from "../components/fetchAPI";
import CrudJsonPlace from "../components/fetchAPI/crudJsonPlace";
import { navbar } from "../components/routerDom5/navbar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import PostData from "../components/fetchAPI/postData";
import GetData from "../components/fetchAPI/getData";
import AddData from "../components/fetchAPI/addData";

// const navbar = React.lazy(() => import("../components/routerDom5/navbar"));
// import Home from "../components/routerDom5/Home";
// import About from "../components/routerDom5/About";

// const Home = React.lazy(() => import("../components/routerDom5/Home"));
// const About = React.lazy(() => import("../components/routerDom5/About"));

export default function Root() {
  return (
    <div>
      <App />
      <Hooks />
      <Count />
      <Render />
      <Index />
      <Slider />
      <Fetch />
      <CrudJsonPlace />
      <PostData />
      <GetData />
      <AddData />
     
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={item.element} />
            );
          })}

          {/* <Route path={"/"} element={<Navigate to={"/home"} />}></Route> */}
          {/* <Route
          path={"/home"}
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path={"/about"}
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </React.Suspense> */}

          {/* <Route path={"/service"} element={<Services />} />
          <Route
            path={"/locetion"}
            element={
              <Privet>
                <Location />
              </Privet>
            }
          />
          <Route path={"/contact"} element={<Contact />} /> */}
        </Route>
      </Routes>
      <React18V />
    </div>
  );
}
