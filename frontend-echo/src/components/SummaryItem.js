import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

function SummaryItem({ label, toolTip, value }) {
  const [isHover, setisHover] = useState(false);

  const handleMouseEnter = () => {
    setisHover(true);
  };

  const handleMouseLeave = () => {
    setisHover(false);
  };

  return (
    <div className="summary-item">
      <p>{label}<FaInfoCircle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></p>
      <h2>{value}</h2>
      {isHover && (
        <div className="summary_tooltip">{toolTip}</div>
      )}
    </div>
  );
}

export default SummaryItem;