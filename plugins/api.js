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
  async register(v) {
    const {
      message,
      user
    } = await axios.post('/registration', v).then(res => res.data);

  },
};
