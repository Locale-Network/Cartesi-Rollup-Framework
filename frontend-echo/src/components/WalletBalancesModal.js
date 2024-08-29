import React from 'react';
import usdc from '../assets/usdc.png'
import llp from '../assets/logo.jpg';
import { SlLogout } from "react-icons/sl";
import { useAuthContext } from '../providers/authProvider';

function WalletBalancesModal({ onClose }) {
  const {setWalletAddress} = useAuthContext();

  const handleDisconnect = async () => {
    setWalletAddress(null);
    onClose();
  };

  return (
    <div className="dropdown-content" style={{ right : 30 }}>
      <div className="wallet-balances-modal">
        <h3>Wallet Balances</h3>
        <div className="balance-item">
          <div className='coin-section'>
            <img src={usdc} width={30} height={30} alt='usdc'/>
            <span>USDC</span>
          </div>
          <span>$0.00</span>
        </div>
        <div className="balance-item">
          <div className='coin-section'>
            <img src={llp} width={30} height={30} alt='localeLending'/>
            <span>LLP</span>
          </div>
          <div className='llp-value'>
            <p>0.00 LLP</p>
            <p>$0.00</p>
          </div>
        </div>
        <button onClick={() => alert('Adding LLP to wallet...')}>Add LLP to wallet</button>
        <hr className='line'/>
        <div className='btn-disconnect' onClick={handleDisconnect}>
          <SlLogout size={18} />
          <p>Disconnect wallet</p>
        </div>
      </div>
    </div>
  );
}

export default WalletBalancesModal;