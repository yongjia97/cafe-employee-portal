const initialState = {
    cafes: [],
    loading: false,
    error: null,
  };
  
  const cafeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CAFES_SUCCESS':
        return { ...state, cafes: action.payload, loading: false, error: null };
      case 'FETCH_CAFES_FAILURE':
        return { ...state, cafes: [], loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default cafeReducer;
  