import React from "react";
import { BrowserRouter } from "react-router-dom";
import StudentApi from "./contextapi";
import CountApi from "./countapi";
import Formapi from "./formapi";

export default function Context({ children }) {
  return (
    <BrowserRouter>
      <StudentApi>
        <CountApi>
          <Formapi>{children}</Formapi>
        </CountApi>
      </StudentApi>
    </BrowserRouter>
  );
}
