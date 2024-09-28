import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: REACT_APP_API_URL, // Adjust this to your API's base URL
    timeout: 10000, // Optional timeout
});

export default axiosInstance;
