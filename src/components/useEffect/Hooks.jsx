import React, { useState, useReducer, useEffect } from "react";

const init = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      console.log("Nothing");
  }
}
const Hooks = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const [data, setData] = useState({
    count: 0,
    name: "Olimjon",
    surname: "Ismatov",
  });

  // useEffect(() => {
  //   console.log("case 1");
  // });

  useEffect(() => {
    setData({
      ...data,
      count: state.count,
    });
  }, [state.count]);

  const change = ({ target: { value, name } }) => {
    setData({
      ...data,
      [name]: value,
      count:
        name === "plus"
          ? data.count + 1
          : name === "minus"
          ? data.count - 1
          : data.count,
    });
  };
  return (
    <div>
      {/* useReducer */}
      <p className="titles"> useEffect</p>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>

      {/* useState */}

      <h2>Count: {data.count}</h2>
      <button name="plus" onClick={change}>
        +
      </button>
      <button name="minus" onClick={change}>
        -
      </button>
      <h2>Name: {data.name}</h2>
      <h2>Surname: {data.surname}</h2>
      <input type="text" name="name" value={data.name} onChange={change} />
      <input
        type="text"
        name="surname"
        value={data.surname}
        onChange={change}
      />
    </div>
  );
};

export default Hooks;
