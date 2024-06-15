// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   counter: 0,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: "globalSlice",
//   initialState,
//   reducers: {
//     toggleLoggedIn: (state) => {
//       state.isLoggedIn = !state.isLoggedIn;
//     },
//     Log_out: (state, { payload }) => {
//       localStorage.removeItem("token");
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { toggleLoggedIn, Log_out } = authSlice.actions;

// export default authSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../src/Api/Axios/axiosInstance";
import { toast } from "react-toastify";
export const STATUS=Object.freeze({
    LOADING:"loading",
    IDLE:"idle"

})
export const loginApi=createAsyncThunk("/user/signin",async(data)=>{
    let response=await axiosInstance.post("/user/signin",data)
    return response.data
})
const authSlice=createSlice({
    name:"login",
    initialState:{
        status:STATUS.IDLE,
        isLogin:false,
        isRedirect:null
    },
    reducers:{
        removeToken:(state)=>{
            localStorage.removeItem("token")
            localStorage.removeItem("image")
            
            
            state.isLogin=false


        },
        checkToken:(state,{payload})=>{
            const token=localStorage.getItem("token")

            if (token) {
                state.isLogin=true
                
            }
        },
        resetRe:(state,{payload})=>{
            state.isRedirect=payload
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginApi.pending,(state)=>{
            state.status=STATUS.LOADING
        })
        .addCase(loginApi.fulfilled,(state,{payload})=>{
            state.status=STATUS.IDLE
            if (payload.status===200) {
                toast.success(payload.message)
                state.isLogin=true
                state.isRedirect="/Home"
                localStorage.setItem("token",payload.token)
                localStorage.setItem("image",payload.image)
                
                

                
            }

        })
        .addCase(loginApi.rejected,(state,{payload})=>{
            state.status=STATUS.IDLE
            toast.error("Error in Login")
        })
    }
})
export const {removeToken,checkToken,resetRe}=authSlice.actions
export default authSlice.reducer