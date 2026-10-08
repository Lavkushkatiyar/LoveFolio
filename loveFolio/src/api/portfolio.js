import apiClient from "./client";

export const getProfile = async () => {
  const response = await apiClient.get("/profile");
  return response.data;
};

export const getSkills = async () => {
  const response = await apiClient.get("/skills/");
  return response.data;
};

export const getExperience = async () => {
  const response = await apiClient.get("/experiences/");
  return response.data;
};

export const getEducation = async () => {
  const response = await apiClient.get("/educations/");
  return response.data;
};

export const getProjects =   async () => {
  const response = await apiClient.get("/projects/");
  return response.data;
};