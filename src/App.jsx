import { createContext, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
export let UserContext = createContext();
function App() {
  let [user, setUser] = useState({
    username: "buddy",
    age: 45,
    email: "buddy@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
