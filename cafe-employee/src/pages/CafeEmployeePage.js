import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEmployeesByCafe } from '../redux/actions/employeeActions';
import EmployeeTable from '../components/Employee/EmployeeTable'; 

function CafeEmployeePage() {
  const dispatch = useDispatch();
  const { cafeId } = useParams(); 
  const employees = useSelector(state => state.cafeEmployees.cafeEmployees);
    console.log(cafeId,employees)
  useEffect(() => {
    dispatch(fetchEmployeesByCafe(cafeId)); 
  }, [dispatch, cafeId]);

  return (
    <div>
      <h2>Employees under Cafe</h2>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default CafeEmployeePage;
