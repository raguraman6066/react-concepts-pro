import React, { useState } from "react";
import styled from "styled-components";
const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
`;
const CounterApp = () => {
  let [count, setCount] = useState(0);
  let [sample, setSample] = useState(returnState());
  function returnState() {
    return 100;
  }
  function handleIncrease() {
    // setCount(count + 1);
    // setCount(count + 1); again 1
    setCount((preState) => {
      return preState + 1;
    });
    console.log(count);
  }
  function handleDecrease() {
    setCount((preState) => {
      return preState - 1;
    });
    console.log(count);
  }
  let message;
  let remainingClick = 10 - count;
  if (count < 10) {
    message = (
      <div>
        <h2>you clicked {count} times</h2>
        <p> still {remainingClick} more times to reach a 10% discount</p>
      </div>
    );
  } else if (count == 10) {
    message = (
      <div>
        <h2>you clicked {count} times</h2>
        <p> you unlocked 10% discount</p>
      </div>
    );
  } else if (count < 20) {
    message = (
      <div>
        <h2>you clicked {count} times</h2>
        <p>
          {" "}
          you are on the way to get more rewards keep click for 20% discount
        </p>
      </div>
    );
  } else {
    message = (
      <div>
        <h2>you clicked {count} times</h2>
        <p> you are a click master</p>
      </div>
    );
  }
  const [data, setData] = useState("Error");
  let displayComp = () => {
    switch (data) {
      case "Loading":
        return <LoadingComp />;
      case "Success":
        return <SuccessComp />;
      case "Error":
        return <ErrorComp />;
    }
  };
  //windows+.
  return (
    <div>
      <h1>Click to unlock Rewards 😀 </h1>
      {displayComp()}
      <Button onClick={handleIncrease}>Click Me!</Button>
    </div>
  );
};

export default CounterApp;
function LoadingComp() {
  return <h4>Loading...</h4>;
}
function SuccessComp() {
  return <h4>Success 😜</h4>;
}
function ErrorComp() {
  return <h4>Error 😥</h4>;
}
