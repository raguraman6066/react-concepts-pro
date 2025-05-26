import React, { useState } from "react";
import styled from "styled-components";
import CounterApp from "./CounterApp";
import Shop from "./Shop";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

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
  let [items, setItems] = useState([
    { id: 1, label: "html&css", checked: true },
    { id: 2, label: "javascript", checked: false },
    { id: 3, label: "react", checked: true },
  ]);
  let [newItem, setNewItem] = useState("");
  function handleDelete() {}
  function handleChecked(id) {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItems);
  }
  function handleSubmit() {
    if (isEdit) {
      let newListItem = items.map((item) => {
        return item.id === currentId ? { ...item, label: newItem } : item;
      });
      setItems(newListItem);
      setNewItem("");
      setCurrentId(null);
      setIsEdit(false);
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
    }
  }
  let [isEdit, setIsEdit] = useState(false);
  let [currentId, setCurrentId] = useState(null);
  function handleDelete(id) {
    let newList = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newList);
  }
  function handleUpdate(id) {
    let listItem = items.find((item) => item.id == id);
    setNewItem(listItem.label);
    setIsEdit(true);
    setCurrentId(id);
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
      <NewButton onClick={changeName}>New Button</NewButton> 
      <CounterApp />
      <Shop />*/}
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="add new item"
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button onClick={handleSubmit}>{isEdit ? "Save" : "Add"}</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              value={item.checked}
              checked={item.checked}
              onChange={() => handleChecked(item.id)}
            />
            <label> {item.label}</label>
            <FaEdit
              onClick={() => handleUpdate(item.id)}
              role="button"
              tabIndex={0}
            />
            <FaTrash
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex={0}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
