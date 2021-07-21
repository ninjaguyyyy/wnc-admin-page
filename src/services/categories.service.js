import axiosClient from "./axiosClient";

const url = "/categories";

export const categoriesService = {
  getAll,
  getAllTree,
  create,
  update,
};

function getAll() {
  return axiosClient.get(url);
}

function getAllTree() {
  const endpoint = url + "/tree";
  return axiosClient.get(endpoint);
}

function create(category) {
  return axiosClient.post(url, category);
}

function update(id, category) {
  const endpoint = url + `/${id}`;
  return axiosClient.patch(endpoint, category);
}
