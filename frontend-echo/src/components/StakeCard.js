import { useState } from "react";
import icon from '../assets/logo.jpg';

const StakeCard = ({ token, estAPY, available, staked }) => {
  const [activeTab, setActiveTab] = useState('stake');

  return (
    <div className="stake-card">
      <div className="stake-card-header">
        <div className="stake-card-sub-header">
          <img src={icon} width={40} height={40} alt="logo" />
          <h3>{token}</h3>
        </div>
        <p>{estAPY} LLP</p>
      </div>
      <div className="stake-card-body">
        <div className="stake-card-tabs">
          <button className={activeTab === 'stake' ? 'active' : ''} onClick={() => setActiveTab('stake')}>Stake</button>
          <button className={activeTab === 'unstake' ? 'active' : ''} onClick={() => setActiveTab('unstake')}>Unstake</button>
          {token === 'FIDU' && (
            <button className={activeTab === 'migrate' ? 'active' : ''} onClick={() => setActiveTab('migrate')}>Migrate</button>
          )}
        </div>
        <div className="stake-card-content">
          <input type="text" placeholder={token} />
          <button className="btn-max">MAX</button>
          <button className="btn-stake">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</button>
        </div>
        <div className="stake-card-footer">
          <p>Available: {available} {token}</p>
          <p>Staked: {staked} {token}</p>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;