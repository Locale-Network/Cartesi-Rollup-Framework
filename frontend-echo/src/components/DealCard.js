import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaInfoCircle } from "react-icons/fa";

function DealCard({ title, subtitle, interest, apy, term, liquidity }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="deal-card">
      <div className="deal-card-header">
        <img src={logo} alt="logo"/>
        <div className="title-section">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="deal-details">
        <p>Variable USDC interest</p>
        <h1>{interest}</h1>
        <div className="deal-details-item">
          <p>Variable GFI APY<FaInfoCircle onMouseEnter={() => handleMouseEnter("apy")} onMouseLeave={handleMouseLeave}/></p>
          <strong>{apy}</strong>
          {hoveredItem === "apy" && (
            <div className="tooltip">
              The Senior Pool’s total current estimated APY, including the current USDC APY and est. GFI rewards APY. The GFI rewards APY is volatile and changes based on several variables including the price of GFI, the total capital deployed on Locale Direct Capital, and Senior Pool’s utilization. Learn more in the <a href="/">Locale Direct Capital Documentation.</a>
            </div>
          )}
        </div>
        <div className="deal-details-item">
          <p>Loan term<FaInfoCircle onMouseEnter={() => handleMouseEnter("term")} onMouseLeave={handleMouseLeave}/></p>
          <strong>{term}</strong>
          {hoveredItem === "term" && (
            <div className="tooltip">
              This deal does not have a fixed term length.
            </div>
          )}
        </div>
        <div className="deal-details-item">
          <p>Liquidity<FaInfoCircle onMouseEnter={() => handleMouseEnter("liquidity")} onMouseLeave={handleMouseLeave}/></p>
          <strong>{liquidity}</strong>
          {hoveredItem === "liquidity" && (
            <div className="tooltip">
              The frequency with which a lender can withdraw some or all of their invested capital.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DealCard;