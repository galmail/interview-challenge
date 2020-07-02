import React from "react";

function Item({ id, name, dietaries, onClick }) {
  const handleClick = e => {
    e.preventDefault();
    console.log(`Item ${id} was clicked.`);
    if (onClick) onClick();
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
    </li>
  );
}

export default Item;
