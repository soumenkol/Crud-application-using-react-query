import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoints/endpoint";



export const updateApi=async(formData)=>{
    try {
        const response=await axiosInstance.post(endpoint.cms.Update,formData)
        return response?.data;
        
    } catch (error) {
        console.log(error)
        
    }

}