import React, { createContext, useState, useContext } from "react";

export const CountContext = createContext();
// export const Count = () => useContext(CountContext);

const CountApi = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};

export default CountApi;
