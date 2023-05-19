import React, { useState, useTransition } from "react";
import { flushSync } from "react-dom";

const React18V = () => {
  ///🚩🚩🚩batching
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  ///🚩🚩🚩 useTransition
  const [data1, setData1] = useState([]);
  const [isPanding, startTransition] = useTransition();

  ///🚩🚩🚩 batching
  const plus = () => {
    setCount(count + 1);
    setStatus((count + 1) % 2 === 0 ? "juft" : "toq");

    // flushSync(() => {
    //   setCount(count + 1);
    // });

    // flushSync(() => {
    //   setStatus((count + 1) % 2 === 0 ? "juft" : "toq");
    // });
  };
 
  const minus = () => {
    setCount(count - 1);
    setStatus((count + 1) % 2 === 0 ? "juft" : "toq");
  };

  const change = ({ target: { value } }) => {
    // setInput(value);
    startTransition(() => {
      data(value);
    });
  };
//   console.log("re-render");
  ///🚩🚩🚩 useTransition
  const data = (value) => {
    let res = [];
    for (let i = 0; i < 100000; i++) {
      res.push(`${i} - ${value}`);
    }
    setData1(res);
  };
  // alert("rrrr");
  return (
    <div>
      <p className="titles">React 18-V </p>
      {/*🚩🚩🚩 batching */}
      <h1>Count:{count}</h1>
      <h1>Status:{status}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>

      {/*🚩🚩🚩 useTransition */}
      <input onChange={change} type="text" />
      {isPanding ? (
        <h1>Loading...</h1>
      ) : (
        data1.map((value) => {
          return <h1 key={1}>{value}</h1>;
        })
      )}
    </div>
  );
};

export default React18V;
