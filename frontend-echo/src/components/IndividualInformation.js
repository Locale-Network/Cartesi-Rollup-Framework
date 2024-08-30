import React, { useState } from 'react';

const IndividualInformation = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    title: 'Mr.',
    genderIdentity: 'Man',
    preferredPronoun: 'He/Him/His',
    racialIdentification: 'Black or African American',
    ethnicIdentification: 'Not Hispanic or Latino or Spanish Origin',
    addressLine1: '',
    addressLine2: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Owner / Guarantor Information</h2>
      <div className="form-group">
        <div>
          <label>First name *</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last name *</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Title *</label>
          <select
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Which best describes your gender identity? *</label>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Woman"
            checked={form.genderIdentity === 'Woman'}
            onChange={handleChange}
          />
          <label>Woman</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Man"
            checked={form.genderIdentity === 'Man'}
            onChange={handleChange}
          />
          <label>Man</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Transgender Woman/Trans Feminine"
            checked={form.genderIdentity === 'Transgender Woman/Trans Feminine'}
            onChange={handleChange}
          />
          <label>Transgender Woman/Trans Feminine</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Transgender Man/Trans Masculine"
            checked={form.genderIdentity === 'Transgender Man/Trans Masculine'}
            onChange={handleChange}
          />
          <label>Transgender Man/Trans Masculine</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Non-Binary/Gender Queer/Gender Fluid"
            checked={form.genderIdentity === 'Non-Binary/Gender Queer/Gender Fluid'}
            onChange={handleChange}
          />
          <label>Non-Binary/Gender Queer/Gender Fluid</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Prefer not to say"
            checked={form.genderIdentity === 'Prefer not to say'}
            onChange={handleChange}
          />
          <label>Prefer not to say</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="genderIdentity"
            value="Prefer to self-describe"
            checked={form.genderIdentity === 'Prefer to self-describe'}
            onChange={handleChange}
          />
          <label>Prefer to self-describe</label>
        </div>
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Which best describes your preferred pronoun? *</label>
        <div className='form-group-item'>
          <input
            type="radio"
            name="preferredPronoun"
            value="He/Him/His"
            checked={form.preferredPronoun === 'He/Him/His'}
            onChange={handleChange}
          />
          <label>He/Him/His</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="preferredPronoun"
            value="She/Her/Hers"
            checked={form.preferredPronoun === 'She/Her/Hers'}
            onChange={handleChange}
          />
          <label>She/Her/Hers</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="preferredPronoun"
            value="They/Them/Theirs"
            checked={form.preferredPronoun === 'They/Them/Theirs'}
            onChange={handleChange}
          />
          <label>They/Them/Theirs</label>
        </div>
        <div className='form-group-item'>
          <input
            type="radio"
            name="preferredPronoun"
            value="Other"
            checked={form.preferredPronoun === 'Other'}
            onChange={handleChange}
          />
          <label>Other</label>
        </div>
      </div>

      <div className="form-group">
        <div style={{ width: '45%' }}>
          <label>Racial identification *</label>
          <select
            name="racialIdentification"
            value={form.racialIdentification}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          >
            <option value="Black or African American">Black or African American</option>
            <option value="White">White</option>
            <option value="Asian">Asian</option>
            <option value="Native American or Alaska Native">Native American or Alaska Native</option>
            <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
            <option value="Two or more races">Two or more races</option>
          </select>
        </div>
        <div style={{ width: '45%' }}>
          <label>Ethnic identification *</label>
          <select
            name="ethnicIdentification"
            value={form.ethnicIdentification}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          >
            <option value="Not Hispanic or Latino or Spanish Origin">Not Hispanic or Latino or Spanish Origin</option>
            <option value="Hispanic or Latino or Spanish Origin">Hispanic or Latino or Spanish Origin</option>
          </select>
        </div>
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Resident address line #1 *</label>
        <input
          type="text"
          name="addressLine1"
          value={form.addressLine1}
          onChange={handleChange}
          required
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>

      <div className="form-group" style={{ display: 'block' }}>
        <label>Resident address line #2 (optional)</label>
        <input
          type="text"
          name="addressLine2"
          value={form.addressLine2}
          onChange={handleChange}
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>
    </div>
  );
};

export default IndividualInformation;