import React from "react";

function Header({ itemsSelected }) {
  const getAllDietaries = () => {
    const allDietaries = itemsSelected.reduce(
      (acc, item) => acc.concat(item.dietaries),
      []
    );
    return [...new Set(allDietaries)];
  };

  const totalByDietary = dietary =>
    itemsSelected.filter(item => item.dietaries.includes(dietary)).length;

  function Dietary({ dietary }) {
    return (
      <>
        {totalByDietary(dietary)}x{" "}
        <span key={dietary} className="dietary">
          {dietary}
        </span>
      </>
    );
  }

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{itemsSelected.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {getAllDietaries().map(dietary => (
              <Dietary key={dietary} dietary={dietary} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
