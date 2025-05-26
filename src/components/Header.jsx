import React, { useContext } from "react";
import { UserContext } from "../App";

const Header = () => {
  let { user } = useContext(UserContext);
  console.log(user);
  return (
    <header>
      Header <p>{user.username.slice(0, 1).toUpperCase()}</p>
    </header>
  );
};

export default Header;
