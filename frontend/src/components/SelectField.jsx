import React from 'react';

const SelectField = ({ label, name, value, onChange, children }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    <select id={name} name={name} value={value} onChange={onChange}>
      {children}
    </select>
  </div>
);

export default SelectField;