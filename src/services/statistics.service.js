import axiosClient from "./axiosClient";

const url = "/statistics";

export const statisticsService = {
  getTotalCoursesByCategories,
};

function getTotalCoursesByCategories() {
  const endpoint = `${url}/courses-by-categories`;
  return axiosClient.get(endpoint);
}
