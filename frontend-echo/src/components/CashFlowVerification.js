import React from 'react';
import { Link } from 'react-router-dom';
import { LuLink } from "react-icons/lu";

const CashFlowVerification = () => {

  return (
    <div className='cash-flow-verification'>
      <div className='cash-flow-verification-item-container'>
        <h2>Cash Flow Verification</h2>
        <div className='form-group'>
          <p style={{ width: '700px' }}>
            Connect your bank accounts securely. This step helps us understand your business financial health through cash flow data and expedite the loan approval process. Learn how it works{' '}
            <Link to="/learn-more">here</Link>.
          </p>
        </div>
        <div className='form-group' style={{ alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10 }}>
          <input type="checkbox" id="consent" />
          <label htmlFor="consent" style={{ width: '700px' }}>
            <strong>I understand</strong> that, by connecting my accounts, I authorize Plaid to share my business transaction history with LaunchKC for the purpose of evaluating my loan application.
          </label>
        </div>
      </div>

      <div className='cash-flow-verification-item-container'>
        <div className='form-group'>
          <div>
            <h2>Connected Accounts
              <p style={{ fontSize: 16, fontWeight: 'normal', margin: '10px 0' }}>Having trouble connecting your bank accounts? Click <Link to="/learn-more">here</Link>. for help</p>
            </h2>
          </div>
          <div className='btn_connect'>Connect <LuLink /></div>
        </div>

        <div className='connected-accounts'>
          <p>No Account Found</p>
          <p>Click the "Connect" button to continue</p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowVerification;