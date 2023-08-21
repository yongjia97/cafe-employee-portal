const initialState = {
    employees: [],
    loading: false,
    error: null,
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_SUCCESS':
        return { ...state, employees: action.payload, loading: false, error: null };
      case 'FETCH_EMPLOYEES_FAILURE':
        return { ...state, employees: [], loading: false, error: action.payload };
      // You can add cases for other actions like editing, deleting, etc.
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  