import React, { createContext, useState } from "react";

export const FormContext = createContext``;

export default function Formapi({ children }) {
  const [active, setActive] = useState(true);
  return (
    <FormContext.Provider value={[active, setActive]}>{children}</FormContext.Provider>
  );
}
