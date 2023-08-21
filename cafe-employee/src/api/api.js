import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

export const getCafes = () => axios.get(`${API_BASE_URL}/cafes`);
export const getEmployees = () => axios.get(`${API_BASE_URL}/employees`);

