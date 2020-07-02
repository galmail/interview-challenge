import React from "react";

function Item({ id, name, dietaries, onClick, onRemove }) {
  const handleClick = e => {
    e.preventDefault();
    console.log(`Item ${id} was clicked.`);
    if (onClick) onClick();
  };

  const handleRemove = e => {
    e.preventDefault();
    console.log(`Item ${id} was removed.`);
    onRemove();
  };

  return (
    <li onClick={handleClick} key={id} className="item">
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
        <button onClick={handleRemove} className="remove-item">
          x
        </button>
      )}
    </li>
  );
}

export default Item;
