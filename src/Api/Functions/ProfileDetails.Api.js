import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";

export const profileAPI = async () => {
  try {
    
    const response = await axiosInstance.get( endpoint.auth. profileDetails);
    console.log(response.data,"profile");
    return response?.data?.data;
    
    
  } catch (error) {
    console.log(error);
  }
         
};