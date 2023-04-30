import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    case "byValue":
      return state + action.payload;
    default:
      return console.log("nothing");
  }
};

const Count = () => {
  const [option, setOption] = useState(1);
  const [count, dispatch] = useReducer(reducer, 0);
  const getInput = ({ target: { value } }) => {
    return setOption(Number(value));
  };

  return (
    <div>
      <p className="titles"> useState, useReducer</p>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <select onChange={getInput} name="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={() => dispatch({ type: "byValue", payload: +option })}>
        {option}
      </button>
    </div>
  );
};

export default Count;
