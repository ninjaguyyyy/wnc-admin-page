import axios from "axios";
import queryString from "query-string";

const LOCAL = "http://localhost:3001/";
const PRO = "https://wnc-online-academy-21.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: PRO,
  headers: { "content-type": "application/json" },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  if (token || token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle error
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
);

export default axiosClient;
