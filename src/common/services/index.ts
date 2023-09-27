import axios from 'axios';

const api = () => {
  const instance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api;
