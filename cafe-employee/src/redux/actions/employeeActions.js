export const fetchEmployees = () => async (dispatch) => {
    try {
      const backendUrl = 'http://localhost:8080';
      const response = await fetch(`${backendUrl}/employees`);
      const employees = await response.json();
  
      dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: employees });
    } catch (error) {
      dispatch({ type: 'FETCH_EMPLOYEES_FAILURE', payload: error });
    }
  };
 
  export const fetchEmployeesByCafe = (cafeId) => async (dispatch) => {
    try {
      const backendUrl = 'http://localhost:8080';
      const response = await fetch(`${backendUrl}/cafes/${cafeId}/employees`); // Adjust the API endpoint
      const employees = await response.json();
      dispatch({ type: 'FETCH_EMPLOYEES_BY_CAFE_SUCCESS', payload: employees });
    } catch (error) {
      dispatch({ type: 'FETCH_EMPLOYEES_BY_CAFE_FAILURE', payload: error });
    }
  };
  