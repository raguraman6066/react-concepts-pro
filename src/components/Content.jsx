import React from "react";
import styled from "styled-components";
import CounterApp from "./CounterApp";
let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
`;

let NewButton = styled(Button)`
  background-color: red;
  box-shadow: 10px 10px 5px black;
`;
const Content = () => {
  let headingStyle = {
    background: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };
  //target current element
  function printSomething(event) {
    console.log(event.target.innerText);
  }
  let user = "buddy";
  function changeName() {
    user = "demo";
    console.log(user);
  }

  return (
    <main>
      {/* <h1 style={headingStyle}>Main Content - {user}</h1>
      <Button
        onClick={(event) => {
          printSomething(event);
        }}
      >
        Click Me
      </Button>
      <NewButton onClick={changeName}>New Button</NewButton> */}
      <CounterApp />
    </main>
  );
};

export default Content;
