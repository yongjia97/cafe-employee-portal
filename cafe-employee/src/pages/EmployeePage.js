import React, { useState, useEffect } from 'react';
import EmployeeTable from '../components/Employee/EmployeeTable';

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState('');
  const backendUrl ='http://localhost:8080';
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`${backendUrl}/employees${selectedCafe ? `?cafe=${selectedCafe}` : ''}`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [selectedCafe]);

  return (
    <div>
      <h1>Employee Management Page</h1>
      <div> 
        <label>Select Cafe: </label>
        <input
          type="text"
          value={selectedCafe}
          onChange={(e) => setSelectedCafe(e.target.value)}
        />
      </div>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default EmployeePage;
