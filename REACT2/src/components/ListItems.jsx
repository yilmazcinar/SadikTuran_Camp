import React from "react";
import Item from "./Item";
import NoItem from "./NoItem";

function ListItems({ items, onDeleteItem, onUpdateItem, filterButton }) {
  return (
    <div>
      <ul className="shopping-list list-unstyled">
        {items.length > 0 ? (
          items.map((i, index) => (
            <Item
              urun={i}
              key={index}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
              filterButton={filterButton}
            />
          ))
        ) : (
          <NoItem />
        )}
      </ul>
    </div>
  );
}

export default ListItems;
