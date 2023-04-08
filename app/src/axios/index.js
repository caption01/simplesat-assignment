import Axios from 'axios';

const BACKEND_API = 'http://localhost:8000';

const createAxios = () => {
  return Axios.create({
    baseURL: `${BACKEND_API}/api/`,
  });
};

const axios = createAxios();

export { axios };
