export const fetchCafes = () => async (dispatch) => {
  try {
    const backendUrl = 'http://localhost:8080';

    const response = await fetch(`${backendUrl}/cafes`);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const cafes = await response.json();

    dispatch({ type: 'FETCH_CAFES_SUCCESS', payload: cafes });
  } catch (error) {
    dispatch({ type: 'FETCH_CAFES_FAILURE', payload: error });
  }
};
