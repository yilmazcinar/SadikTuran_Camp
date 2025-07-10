import React from "react";

function ClearButton({ onClearItems }) {
  return (
    <div>
      <button className="btn btn-danger clear" onClick={onClearItems}>
        Clear All
      </button>
    </div>
  );
}

export default ClearButton;
