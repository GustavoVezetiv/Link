import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.104:3333', // Apenas o host e a porta
});

export { api };
