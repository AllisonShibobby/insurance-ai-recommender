import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // 你的后端地址
  timeout: 5000,
});

export default axiosInstance;
