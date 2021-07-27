import axiosClient from "./axiosClient";

const url = "/admin";

export const adminService = {
  create,
};

function create(user) {
  const endpoint = url + "/users";
  return axiosClient.post(endpoint, user);
}
