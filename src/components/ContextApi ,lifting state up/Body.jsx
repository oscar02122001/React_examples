import React, { useContext } from "react";
import { StudentContext } from "../../contexts/contextapi";
import { CountContext } from "../../contexts/countapi";

const Body = () => {
  const [users, setUsers] = useContext(StudentContext);
  const [count, setCount] = useContext(CountContext);
 
  const Delete = (id) => {
    setUsers(
      users.filter((user) => {  
        return user.id !== id;
      })
    );
  };

  const Plus = () => {
    return (count + 1), setCount(count + 1);
  };
  const Minus = () => {
    return (count - 1), setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>

      <h1>Students: {users.length}</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <h1>
              {users.id}. {users.name} - {users.status}{" "}
              <button onClick={() => Delete(users.id)}>delete</button>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
