import React, { useEffect, useRef, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [apiData, setApi] = useState("");
  const [check, setCheck] = useState(false);
  const input = useRef("");


  useEffect(() => {
    check &&
      fetch(`https://restcountries.com/v3.1/name/${apiData}`)
        .then((res) => res.json())
        .then((res) => setData(res[0]));
  }, [apiData]);

  return (
    <div>
      <p className="titles">Fetch API</p>
      <input ref={input} type="text" />
      <button
        onClick={() => {
          setCheck(true);
          setApi(input.current.value);
        }}
      >
        Click
      </button>
      <h1>
        {data?.name?.common} -{check && (data?.population / 1000000).toFixed(1)}{" "}
        bln
      </h1>
      <h1>Borders:</h1>
      {data?.borders?.map((v) => {
        return (
          <h1 style={{ display: "flex" }} key={v.id}>
            {v}
          </h1>
        );
      })}
      
    </div>
  );
};

export default Fetch;
