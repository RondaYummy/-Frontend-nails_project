import Axios from 'axios';
import {
  backendIP
} from '../config/default.json';
const baseConfig = {
  baseURL: `http://${process.env.NODE_ENV === 'production' ? `${backendIP}` + '/api' : 'localhost'}:3505/api`,
};

const axios = Axios.create(baseConfig);

export default {
  login(v) {
    return axios.post('/signin', v);
  },
  logout(userId) {
    return axios.post('/logout', userId);
  },
  async register(v) {
    return axios.post('/registration', v).then(res => res.data);
  },
  
};
