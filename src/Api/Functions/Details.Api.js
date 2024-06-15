import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";

export const detailsApi = async (id) => {
  try {
    const url = `${endpoint.cms.Detail}/${id}`;

    const response = await axiosInstance.get(url);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
