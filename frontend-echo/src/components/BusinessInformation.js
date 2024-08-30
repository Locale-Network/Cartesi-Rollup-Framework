import React, { useState } from 'react';

function BusinessInformation() {
  const [formData, setFormData] = useState({
    businessName: '',
    streetAddress1: '',
    streetAddress2: '',
    state: '',
    city: '',
    zipCode: '',
    ein: '',
    yearFounded: '',
    legalStructure: '',
    website: '',
    primaryIndustry: '',
    primaryIndustryOther: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='businessInfomationForm'>
      <h2>Business Information</h2>
      <div className="form-group" style={{ display: 'block' }}>
        <label>Business legal name *</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Business street address line #1 *</label>
        <input
          type="text"
          name="streetAddress1"
          value={formData.streetAddress1}
          onChange={handleChange}
          required
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Business street address line #2 (optional)</label>
        <input
          type="text"
          name="streetAddress2"
          value={formData.streetAddress2}
          onChange={handleChange}
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>

      <div className="form-group">
        <div>
          <label>Business state *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Business city *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Business zip code *</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <label>EIN *</label>
          <input
            type="text"
            name="ein"
            value={formData.ein}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Year founded *</label>
          <input
            type="number"
            name="yearFounded"
            value={formData.yearFounded}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Legal structure *</label>
          <select
            name="legalStructure"
            value={formData.legalStructure}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="LLC">LLC</option>
            <option value="Corporation">Corporation</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Business website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>

      <div className="form-group">
        <div>
          <label>Primary industry *</label>
          <select
            name="primaryIndustry"
            value={formData.primaryIndustry}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Financial Services">Financial Services</option>
          </select>
        </div>

        <div>
          <label>Primary industry (other): Please describe</label>
          <input
            type="text"
            name="primaryIndustryOther"
            value={formData.primaryIndustryOther}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Describe your company in one sentence *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{ width: 'calc(100% - 5px)' }}
        />
      </div>
    </div>
  );
}

export default BusinessInformation;