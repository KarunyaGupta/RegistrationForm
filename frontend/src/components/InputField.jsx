import React from 'react';

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    <input type={type} name={name} id="inputbox" placeholder={placeholder}required
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;