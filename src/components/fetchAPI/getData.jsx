import React, { useState } from "react";
import UpDate from "./update";

const GetData = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  const getApi = () => {
    return fetch(`http://localhost:8081/api/v1/houses/list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  const deleteApi = (id) => {
    return fetch(`http://localhost:8081/api/v1/houses/${id}`, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) return getApi();
      });
  };

  return (
    <div>
      <button onClick={getApi}>getData</button>
      <UpDate id={id} />
      {data.map((v) => (
        <div key={v.id}>
          <h1>
            {v.id} - {v.name} - {v.address} - {v.city}{" "}
          </h1>
          <button onClick={() => deleteApi(v.id)}>delete</button>
          <button onClick={() => setId(v.id)}>sekect</button>
        </div>
      ))}
    </div>
  );
};

export default GetData;
