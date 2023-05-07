import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Location from "./Location";
import Contact from "./Contact";
import Privet from "./privet";

export const navbar = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    id: 3,
    name: "Services",
    path: "/service",
    element: <Services />,
  },
  {
    id: 4,
    name: "Location",
    path: "/locetion",
    element: (
      <Privet>
        <Location />
      </Privet>
    ),
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   id: 6,
  //   name: "404 not found",
  //   path: "*",
  //   element: <Home />,
  // },
];
