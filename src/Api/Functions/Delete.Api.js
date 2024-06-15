import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";
// import { endpoint } from "../Endpoints/endpoints";
// import { EndpointDefinitions } from "@reduxjs/toolkit/query";

export const DeleteApi = async (id) => {
  try {
    const response = await axiosInstance.post(endpoint.cms.Delete,id);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};