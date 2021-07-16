import axiosClient from "./axiosClient";

const url = "/users";

export const userService = {
  getAll,
};

function getAll() {
  return axiosClient.get(url);
}
