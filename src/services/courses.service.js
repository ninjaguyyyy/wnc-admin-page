import axiosClient from "./axiosClient";

const url = "/courses";

export const coursesService = {
  getAll,
};

function getAll() {
  return axiosClient.get(url);
}
