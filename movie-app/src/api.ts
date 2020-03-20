import axios from 'axios';

export default axios.create({
  baseURL: `https://reactjs-cdp.herokuapp.com`
});