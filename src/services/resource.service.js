import axiosClient from "./axiosClient";

const url = "/resources";

export const resourceService = {
  getImage,
  getVideo,
};

function getImage(imageName) {
  const endpoint = `${url}/image/${imageName}`;
  return axiosClient.get(endpoint);
}

function getVideo(videoName) {
  const endpoint = `${url}/video/${videoName}`;
  return axiosClient.get(endpoint);
}
