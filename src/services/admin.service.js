import axiosClient from "./axiosClient";

const url = "/admin";

export const adminService = {
  create,
  deleteUser,
  updateUser,
};

function create(user) {
  const endpoint = url + "/users";
  return axiosClient.post(endpoint, user);
}

function deleteUser(userId) {
  const endpoint = url + "/users/" + userId;
  return axiosClient.delete(endpoint);
}

function updateUser(userId, user) {
  const endpoint = url + "/users/" + userId;
  return axiosClient.patch(endpoint, user);
}
