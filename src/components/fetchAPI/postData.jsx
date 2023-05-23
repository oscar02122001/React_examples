import React, { useRef } from "react";

const PostData = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");
  const getApi = () => {
    return fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: pwRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res?.authenticationToken));
  };
  return (
    <div>
      <span>
        email
        <input ref={emailRef} value={'olimjonismatov01@gmail.com'} type="text" />
      </span>
      <span>
        password
        <input ref={pwRef} value={'123456'} type="text" />
      </span>
      <button onClick={getApi}>login</button>
      <button onClick={ localStorage.clear()}>logout</button>
    </div>
  );
};

export default PostData;
