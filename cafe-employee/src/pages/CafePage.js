import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes } from '../redux/actions/cafeActions';
import CafeTable from '../components/Cafe/CafeTable';
import { useNavigate } from 'react-router-dom';
function CafePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cafes = useSelector(state => state.cafe.cafes);
console.log(cafes)
  useEffect(() => {
    dispatch(fetchCafes());
  }, [dispatch]);

  const handleAddCafe = () => {

  };
  const handleEmployeeRowClick = (cafeId) => {
    navigate(`/cafes/${cafeId}/employees`);
  };

  return (
    <div>
      <h2>Cafes</h2>
      <button onClick={handleAddCafe} >Add New Cafe </button>
      <CafeTable cafes={cafes} onEmployeeRowClick={handleEmployeeRowClick} />
    </div>
  );
}

export default CafePage;
