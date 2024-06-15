// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./root.red";
// export const store = configureStore({
//     reducer:rootReducer
    
// })

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../../../src/Redux-toolkit/Slice/authSlice";

export const store=configureStore({
    reducer:{
        login:authSlice
    }
})