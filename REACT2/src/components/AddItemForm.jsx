import React from "react";
import { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    onAddItem(item);
    setName("");
  }

  return (
    <form
      action=""
      className="shopping-form border rounden p-3 mb-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Eleman Ekle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}

export default AddItemForm;
