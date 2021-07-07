import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ancient-crag-45756.herokuapp.com/food/',
});
