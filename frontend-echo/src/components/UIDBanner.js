import React from 'react';

const UIDBanner = ({ text, onClick }) => {
  return (
    <div className="uid-banner">
      <div className="uid-content">
        <h3>🌐 Set up your UID to start</h3>
        <p>
          Unique Identity (UID) is a non-transferrable NFT representing KYC-verification on-chain. 
          A UID is required to participate in the Goldfinch lending protocol. No personal information is stored on-chain.
        </p>
      </div>
      <button className="uid-button" onClick={onClick}>{text}</button>
    </div>
  );
}

export default UIDBanner;