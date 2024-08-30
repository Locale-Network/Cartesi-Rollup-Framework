import React, { useState } from 'react';

function PreQualificationForm() {
  const [answers, setAnswers] = useState({
    isCompanyInUS: 'Yes',
    isTeamEligible: 'Yes',
    isForProfit: 'Yes',
    hasMVP: 'Yes',
    isLocatedInKC: 'Yes'
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  return (
    <div className="pre-qualification-form">
      <h2>Pre-Qualification</h2>
      <div className="form-group">
        <label>Is the Company based in the United States?</label>
        <select name="isCompanyInUS" value={answers.isCompanyInUS} onChange={handleSelectChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are all members of the founding team eligible to work in the United States?</label>
        <select name="isTeamEligible" value={answers.isTeamEligible} onChange={handleSelectChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Is your Company a for-profit entity that provides a technology-based product, service, or solution?</label>
        <select name="isForProfit" value={answers.isForProfit} onChange={handleSelectChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Do you have a minimum viable product with revenue under 1 million?</label>
        <select name="hasMVP" value={answers.hasMVP} onChange={handleSelectChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Are you located in, or willing to establish an operating presence within the Kansas City, Missouri county lines for at least one year?</label>
      </div>
      <div className="form-group">
        <select name="isLocatedInKC" value={answers.isLocatedInKC} onChange={handleSelectChange} style={{ width: '100%' }}>
          <option value="Yes">Yes, the company and 51% of the founding team are located in Kansas City, Missouri.</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
}

export default PreQualificationForm;