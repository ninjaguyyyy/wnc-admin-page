import axiosClient from "./axiosClient";

const url = "/users/";

export const authService = {
  login,
};

function login(data) {
  const endpoint = url + "login";
  return axiosClient.post(endpoint, data);
}
