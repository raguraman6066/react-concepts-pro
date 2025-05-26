import React from "react";
import { UserContext } from "../App";

const Footer = () => {
  let data = new Date();
  return (
    <footer>
      <h2>Footer</h2>
      <UserContext.Consumer>
        {(value) => {
          return (
            <h1>
              {value.user.username} - @ {data.getFullYear()}
            </h1>
          );
        }}
      </UserContext.Consumer>
    </footer>
  );
};

export default Footer;
