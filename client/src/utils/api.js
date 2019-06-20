import axios from 'axios';

Api = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json"
});

export default Api;
