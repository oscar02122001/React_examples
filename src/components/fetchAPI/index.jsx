import React, { useEffect, useRef, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const input = useRef("");

  const renderCountry = () => {
    // useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${input.current.value}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]));
    // }, []);
  };
  // console.log(data.name?.common);
  console.log(input);
  return (
    <div>
      <p className="titles">Fetch API </p>
      <input rel={input} type="text" />
      <button onClick={renderCountry}>Click</button>
      <h1>{data.name?.common}</h1>
      {data.borders?.map((v) => {
        return <h1> {v}</h1>;
      })}
    </div>
  );
};

export default Fetch;
