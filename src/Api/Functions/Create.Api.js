import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";
// import { endpoint } from "../Endpoints/endpoints";
// import { EndpointDefinitions } from "@reduxjs/toolkit/query";

export const Createapi = async (formData) => {
  try {
    const response = await axiosInstance.post(endpoint.cms.create,formData);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};