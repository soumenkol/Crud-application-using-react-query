import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";

export const AddcontactNow = async (data) => {
  try {
    const response = await axiosInstance.post(endpoint.auth.signup, data);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};