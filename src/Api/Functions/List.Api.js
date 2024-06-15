// import axiosInstance from "../Axios/axiosInstance";
// import { endpoint } from "../../../src/Api/Endpoints/endpoint";

// export const listAPI= async () => {
//   try {
//     const response = await axiosInstance.post(endpoint.cms.list);
//     return response?.data?.data;
//   } catch (error) {
//     console.log(error);
//   }
// };










import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";
// import { endpoint } from "../Endpoints/endpoints";
// import { EndpointDefinitions } from "@reduxjs/toolkit/query";

export const listAPI = async () => {
  try {
    const response = await axiosInstance.post(endpoint.cms.list);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
