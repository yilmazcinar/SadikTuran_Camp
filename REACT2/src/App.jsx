import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";
import { useState } from "react";

const urunler = [
  {
    id: 1,
    name: "yumurta",
    completed: false,
  },
  {
    id: 2,
    name: "peynir",
    completed: false,
  },
  {
    id: 3,
    name: "zeytin",
    completed: false,
  },
  {
    id: 4,
    name: "et",
    completed: false,
  },
  {
    id: 5,
    name: "tavuk",
    completed: false,
  },
];

function App() {
  const [items, setItems] = useState(urunler);
  const [filterButton, setFilterButton] = useState("all");

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    setFilterButton("all");
  }

  function handleDeteleItem(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }

  function handleUpdateItem(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );

    setItems(updatedItems);
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="container">
      <Header></Header>
      <AddItemForm onAddItem={handleAddItem}></AddItemForm>
      <FilterButtons
        filterButton={filterButton}
        setFilterButton={setFilterButton}
      ></FilterButtons>
      <ListItems
        items={items}
        onDeleteItem={handleDeteleItem}
        onUpdateItem={handleUpdateItem}
        filterButton={filterButton}
      ></ListItems>
      <ClearButton onClearItems={handleClearItems}></ClearButton>
    </div>
  );
}

export default App;
