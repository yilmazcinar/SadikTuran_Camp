import React from "react";

function FilterButtons({ filterButton, setFilterButton }) {
  return (
    <div className=" border raunded p-3 mb-3">
      <button
        item-filter="all"
        className={`btn  ${
          filterButton == "all" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterButton("all")}
      >
        All
      </button>
      <button
        item-filter="incompleted"
        className={`btn  ${
          filterButton == "incompleted" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterButton("incompleted")}
      >
        Incompleted
      </button>
      <button
        item-filter="completed"
        className={`btn  ${
          filterButton == "completed" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilterButton("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
