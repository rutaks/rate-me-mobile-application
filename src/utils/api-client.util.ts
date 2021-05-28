import axios from 'axios';
// import {BASE_URL} from '@env';

export const baseURL = 'https://rate-me.awesomity.rw';
// export const baseURL = 'http://192.168.43.134:3000';

const instance = axios.create({
  // withCredentials: true,
  baseURL,
});

export default instance;
