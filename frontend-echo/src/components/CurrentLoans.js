import React from 'react';

const CurrentLoans = () => {
  return (
    <div className="form-section">
      <h2>Current Loans</h2>
      <div className="form-group">
        <div>
          <label>Does your business currently have outstanding loans?</label>
          <label>(ex: term loans, revolving credit, equipment financing, etc.)</label>
        </div>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className='form-group-container'>
        <div className="form-group">
          <label>Lender Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Loan Type</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Outstanding Loan Balance</label>
          <input type="number" required />
        </div>
        <div className="form-group">
          <label>Monthly Payment Amount</label>
          <input type="number" required />
        </div>
        <div className="form-group">
          <label>Loan Term Remaining (in months)</label>
          <input type="number" required />
        </div>
        <div className="form-group">
          <label>Annual Interest Rate</label>
          <input type="number" step="0.01" required />
        </div>
      </div>
      <button type="button" className='btn_add_loan'>+ Add Loan</button>
    </div>
  );
};

export default CurrentLoans;