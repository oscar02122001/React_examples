import React, { useEffect, useRef, useState } from "react";
// import users from "../../users";

const CrudJsonPlace = () => {
  const name = useRef("");
  const web = useRef("");
  const [student, setStudent] = useState([]);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("id");
  const [info, setInfo] = useState("");

  const getApi = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id || ""}`).then(
      (res1) => res1.json()
    );
  };

  useEffect(() => {
    getApi().then((res1) => {
      setData(res1);
      setStudent(res1);
    });
  }, []);

  const getData = ({ target: { value } }) => {
    setSelect(value);
  };

  const search = ({ target: { value } }) => {
    let res = data.filter((s) => `${s[select]}`.toLowerCase().includes(value));
    setStudent(res);
  };
  const del = (id) => {
    let res = student.filter((s) => s.id !== id);
    setStudent(res);
  };

  const getInfo = (id) => {
    getApi(id).then((res1) => {
      setInfo(res1);
    });
  };

  const addUser = () => {
    let res = [
      ...student,
      {
        id: student.length + 1,
        name: name.current.value,
        website: web.current.value,
      },
    ];
    setStudent(res);
    console.log(student);
  };
 
  return (
    <div>
      <div>
        <select onChange={getData}>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="website">Website</option>
        </select>
        <input onChange={search} type="text" placeholder="search" />
        <button onClick={search}>search</button>
        <button onClick={() => setStudent(data)}>Reload</button>
        <div>
          Name: <input ref={name} type="text" />
          Website:
          <input ref={web} type="text" />
          <button onClick={addUser}>add</button>
        </div>
      </div>
      <h1>JsonPlaceholder</h1>
      <div style={{ display: "flex" }}>
        <table style={{ width: "800px", textAlign: "center" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>info</th>
            </tr>
          </thead>
          <tbody>
            {student.map(({ id, name, website }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{website}</td>
                  <td>
                    <button onClick={() => del(id)}>delete</button>
                  </td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button onClick={() => getInfo(id)}>info</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <h1>Name: {info.name}</h1>
          <h2>UserName: {info.username}</h2>
          <h3>Email: {info.email}</h3>
          <h3>Phone Number: {info.phone}</h3>
          <h3>
            Address: {info.address?.street}, {info.address?.city}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CrudJsonPlace;
