import React, { useState, createContext,useContext } from "react";
import data from "../users";

export const StudentContext = createContext();
// export const Student = (()=>{useContext(StudentContext)})

const StudentApi = ({ children }) => {
  const [users, setUsers] = useState(data);
  return (
    <StudentContext.Provider value={[users, setUsers]}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentApi;
