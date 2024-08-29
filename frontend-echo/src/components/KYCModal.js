import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const KYCModal = ({ onClose, onBegin }) => {
  return (
    <div className="kyc-modal-backdrop">
      <div className="kyc-modal">
        <div className="kyc-modal-header">
          <h2>Verify your identity</h2>
          <button className="kyc-close-button" onClick={onClose}>×</button>
        </div>
        <div className="kyc-modal-content">
          <h3>Locale Lending requires identity verification</h3>
          <div className="kyc-steps">
            <div className="kyc-step">
              <FaCheckCircle size={48} color="green" />
              <p>First, complete KYC using Persona or Parallel Markets</p>
            </div>
            <div className="kyc-step">
              <FaGlobe size={48} color="purple" />
              <p>Then claim your UID NFT for identity management</p>
            </div>
          </div>
          <p className="kyc-info">
            All information you provide is kept secure and will not be used for any purpose beyond executing your transactions.
            <a href="/kyc-info"> Why does Locale Lending KYC?</a>
          </p>
        </div>
        <div className="kyc-modal-footer">
          <button className="kyc-begin-button" onClick={onBegin}>Begin</button>
        </div>
      </div>
    </div>
  );
}

export default KYCModal;