import React, { useEffect, useState } from 'react';

const DataTable = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3200/registrations')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setRegistrations(data);
            })
            .catch((error) => {
                console.error('Error fetching registration data:', error);
            });
    }, []);

    return (
        <div className="Registeration">
            <h2>Registration Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((registration, index) => (
                        <tr key={index}>
                            <td>{registration.fname}</td>
                            <td>{registration.lname}</td>
                            <td>{registration.email}</td>
                            <td>{registration.mobile}</td>
                            <td>{registration.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;