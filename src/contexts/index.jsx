import React from "react";
import StudentApi from "./contextapi";
import CountApi from "./countapi";
import Formapi from "./formapi";

export default function Context({ children }) {
  return (
    <StudentApi>
      <CountApi>
        <Formapi>{children}</Formapi>
      </CountApi>
    </StudentApi>
  );
}
