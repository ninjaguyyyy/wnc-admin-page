import axiosClient from "./axiosClient";

const url = "/categories";

export const categoriesService = {
  getAll,
  getAllTree,
};

function getAll() {
  return axiosClient.get(url);
}

function getAllTree() {
  const endpoint = url + "/tree";
  return axiosClient.get(endpoint);
}
