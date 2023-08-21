const initialState = {
    cafeEmployees: [], 
    loading: false,
    error: null,
  };
  
  export const cafeEmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CAFE_EMPLOYEES_SUCCESS': 
        return { ...state, cafeEmployees: action.payload, loading: false, error: null };
      case 'FETCH_CAFE_EMPLOYEES_FAILURE': 
        return { ...state, cafeEmployees: [], loading: false, error: action.payload };
      default:
        return state;
    }
  };
  