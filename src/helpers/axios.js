import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cookbook-addec.firebaseio.com/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'cookbook' },
});

export default instance;
