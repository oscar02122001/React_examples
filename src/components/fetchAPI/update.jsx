import React, { useRef, useState } from "react";

const UpDate = ({ id }) => {
  const nameRef = useRef("");
  const [home, setHome] = useState({
    name: 'sdcsdcsd',
  });
  const update = (id) => {
    return fetch(`http://localhost:8081/api/v1/houses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(home),
    })
      .then((res) => res.json())
      .then((res) => {
        setHome(res);
      });
  };
  console.log(home.name);
  console.log(nameRef.current.value);
  return (
    <div>
      Name: <input ref={nameRef} type="text" />
      City: <input type="text" />
      <button onClick={() => update(id)}>update</button>
    </div>
  );
};

export default UpDate;
