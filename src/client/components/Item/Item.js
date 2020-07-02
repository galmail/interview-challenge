import React from "react";

function Item({ id, name, dietaries, onClick, onRemove }) {
  return (
    <li onClick={onClick} key={id} className="item">
      <h2>{name}</h2>
      <p>
        {dietaries &&
          dietaries.map((dietary, idx) => (
            <span key={idx} className="dietary">
              {dietary}
            </span>
          ))}
      </p>
      {onRemove && (
        <button onClick={onRemove} className="remove-item">
          x
        </button>
      )}
    </li>
  );
}

export default Item;
