import axios from 'axios';

export const submitForm = async (formData) => {
  const response = await axios.post('http://localhost:8000/submit', formData);
  return response.data;
};

