import React from "react";
import App from "../components/CRUD/State";
import Render from "../components/ContextApi ,lifting state up/render";
import Hooks from "../components/useEffect/Hooks";
import Count from "../components/useState, useReducer/count";
import Index from "../components/useRef";
import Slider from "../components/slider/slider";
import Navbar from "../components/routerDom5/Navbar";
import Home from "../components/routerDom5/Home";
import About from "../components/routerDom5/About";
import Services from "../components/routerDom5/Services";
import Location from "../components/routerDom5/Location";
import Contact from "../components/routerDom5/Contact";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
export default function Root() {
const history = useHistory()
  return (
    <div>
      <App />
      <Hooks />
      <Count />
      <Render />
      <Index />
      <Slider />
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/service"} component={Services} />
        <Route path={"/locetion"} component={Location} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"*"}>
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
