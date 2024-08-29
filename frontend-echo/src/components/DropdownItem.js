import React from "react";

function DropdownItem({ label, link }) {

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="dropdown-item" onClick={handleClick}>
      {label} <span className="arrow">→</span>
    </div>
  );
}

export default DropdownItem;