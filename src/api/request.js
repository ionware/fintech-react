import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API_URL,
});

// intercept response.
request.interceptors.response.use((response) => {
  return response.data;
});

export default request;
