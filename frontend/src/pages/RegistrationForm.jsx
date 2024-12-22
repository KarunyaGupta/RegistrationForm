import React, { useState } from 'react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        fetch('http://localhost:3200/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Registration successful:', data);
                // Handle successful registration (e.g., display success message, redirect)
            })
            .catch((error) => {
                console.error('Registration failed:', error);
                // Handle registration error (e.g., display error message)
            });
    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="First Name" name="fname" type="text" placeholder="Enter First Name" value={formData.fname} onChange={handleChange} />
                <InputField label="Last Name" name="lname" type="text" placeholder="Enter Last Name" value={formData.lname} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                <InputField label="Mobile" name="mobile" type="number" placeholder="Enter Mobile Number" maxLength="10" value={formData.mobile} onChange={handleChange} />
                <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="" disabled>
                        Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </SelectField>
                <InputField label="Password" name="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                
                <button type="submit" id="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;