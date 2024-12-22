import React from 'react'

function Gender() {
  return (
    <div>
    <label htmlFor="gender">Gender:</label>
    <select
      id="gender"
      name="gender"
      required
    >
      <option value="" disabled selected>
        Select Gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select></div>
  )
}

export default Gender