import { configureStore } from '@reduxjs/toolkit';
import cafeReducer from './reducers/cafeReducer';
import employeeReducer from './reducers/employeeReducer';
import { cafeEmployeeReducer } from './reducers/cafeEmployeeReducer';
const store = configureStore({
  reducer: {
    cafe: cafeReducer,
    employee: employeeReducer,
    cafeEmployees: cafeEmployeeReducer
  },
});

export default store;
