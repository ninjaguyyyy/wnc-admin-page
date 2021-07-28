import axiosClient from "./axiosClient";

const url = "/admin";

export const adminService = {
  create,
  deleteUser,
  updateUser,
  disableCourse,
  enableCourse,
  deleteCourse,
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

function disableCourse(courseId) {
  const endpoint = url + "/courses/" + courseId + "/disable";
  return axiosClient.patch(endpoint);
}

function enableCourse(courseId) {
  const endpoint = url + "/courses/" + courseId + "/enable";
  return axiosClient.patch(endpoint);
}

function deleteCourse(courseId) {
  const endpoint = url + "/courses/" + courseId;
  return axiosClient.delete(endpoint);
}
