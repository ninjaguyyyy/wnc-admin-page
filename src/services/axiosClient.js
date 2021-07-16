import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/",
  headers: { "content-type": "application/json" },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
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
    throw error;
  }
);

export default axiosClient;