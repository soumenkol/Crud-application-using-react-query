// import { useMutation } from "@tanstack/react-query";
// import React, { useState } from "react";
// //import { signUpUser } from "../utils/api";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { AddcontactNow } from "../../../Api/Functions/RegisterApi";
// const Registration = () => {
//   const [userInfo, setUserInfo] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: AddcontactNow,
//     onSuccess: () => {
//       navigate("/signin");
//       toast.success("Successfully Registered ");
//     },
//   });

//   const handleChange = (e) => {
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     mutation.mutate(userInfo);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
//               Register user
//             </h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   name="first_name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   id="first_name"
//                   value={userInfo.first_name}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   name="last_name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   id="last_name"
//                   value={userInfo.last_name}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   name="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={userInfo.email}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="john@gmail.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   name="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={userInfo.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <button className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;


// import React from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { AddcontactNow } from "../../../../src/Api/Functions/RegisterApi";
// import { useMutation } from "@tanstack/react-query";
// import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// const Registration = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const {mutate,isPending }= useMutation({
//     mutationFn: AddcontactNow,
//     onSuccess: () => {
//       toast.success("Successfully Registered ");
//     },
//   });

//   const onSubmit = async (data) => {
//     // const formData=new FormData()
//     // formData.append("fist_name",data.first_name)
//     // formData.append("last_name",data.last_name)
//     // formData.append("email",data.email)
//     // formData.append("password",data.password)
//    mutate(formData)
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
//           <Paper elevation={3} sx={{ padding: 2 }}>
//             <Typography variant="h5" gutterBottom>
//               Contact Form
//             </Typography>
//             <form>
//               <TextField
//                 {...register("first_name", { required: true, maxLength: 20 })}
//                 label="first_name"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 error={errors.first_name}
//                 helperText={errors.first_name && "First name is required"}
//               />
//               <TextField
//                 {...register("last_name", { required: true, maxLength: 20 })}
//                 label="last_name"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 error={!!errors.last_name}
//                 helperText={errors.last_name && "Last name is required"}
//               />
//               <TextField
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                     message: "Invalid email format",
//                   },
//                 })}
//                 label="Your Email"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 error={errors.email}
//                 helperText={errors.email && errors.email.message}
//               />
//               <TextField
//                 {...register("password", { required: true })}
//                 label="password"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 error={!!errors.password}
//                 helperText={errors.password && "Password is required"}
//               />

//              {isPending   ?    <Button variant="contained">Loading..</Button>    
             
//             :  
//             <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//             type="submit"
//             onClick={handleSubmit(onSubmit)}
//             sx={{ marginTop: 2 }}
//           >
//            Sumbit

//           </Button>
            
//             }
//             </form>
//             <Link to="/Login">Login</Link>
//           </Paper>
         
//         </Grid>
//       </Grid>
     
//     </Container>
//   );
// };

// export default Registration;

//my design

// import React,{useState} from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { AddcontactNow } from "../../../../src/Api/Functions/RegisterApi";
// import { useMutation } from "@tanstack/react-query";
// import { Button, Container, Grid, Paper, TextField, Typography ,Box} from "@mui/material";
// import { Link } from "react-router-dom";
// const Registration = () => {
//   const [image, setImage] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const mutation = useMutation({
//     mutationFn: AddcontactNow,
//     onSuccess: (data) => {
//       // toast.success("Successfully Registered ");
//       if(data.status===200){
//         toast.success(data.message)
//         localStorage.setItem("photo",data.data.photo)
//       }
//       else{
//         if(data.status===201){
//           toast.error(data.message)
//         }
//       }
//     },
//   });

//   const onSubmit = async (data) => {
//     // try {
//     //   await mutation.mutateAsync(data);
//     // } catch (error) {
//     //   console.error(error);
//     // }

//     const formData = new FormData();
//     formData.append("first_name", data.first_name);
//     formData.append("last_name", data.last_name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("profile_pic", data.profile_pic[0]);

//     mutation.mutate(formData);

//   };

//   return (
   

//     <div>
//             <form>
//                 <Box display="flex"
//                  flexDirection={"column"} 
//                   maxWidth={400}
//                   alignItems={'center'} 
//                   justifyContent={'center'}
//                   margin="auto" marginTop={5}
//                   padding={3} borderRadius={5}
//                   boxShadow={'5px 4px 10px #ccc'}
//                   sx={{":hover":{
//                          boxShadow:"10px 10px 20px #ccc"
//                   },}}>
//                     <Typography  variant='h4' padding={3} textAlign="center">Registration</Typography>
//                     <TextField {...register("first_name", { required: true, maxLength: 20 })}
//                     margin='normal'
//                      type={'text'}
//                       variant='outlined'
//                        label='first_name'
//                        error={errors.first_name}
//                        helperText={errors.first_name && "name is required"}/>
//                       <TextField
//                 {...register("last_name", { required: true, maxLength: 20 })}
//                 label="last_name"
//                 margin="normal"
//                 variant="outlined"
//                 error={!!errors.last_name}
//                 helperText={errors.last_name && "Last name is required"}
//               />
//                     <TextField {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                     message: "Invalid email format",
//                   },
//                 })}
//                 margin='normal' 
//                 type={'email'}
//                 variant='outlined'
//                 label='Email'
//                 error={errors.email}
//                 helperText={errors.email && "email is required"}/>
//                     <TextField   {...register("mobile", { required: true, maxLength: 20 })}
//                     margin='normal' 
//                     type={'number'}
//                      variant='outlined' 
//                      label='number'/>
//                     <TextField   {...register("password", { required: true })}
//                      margin='normal'
//                      type={'password'}
//                       variant='outlined' 
//                       label='Password'/>
//                         <TextField
//                       {...register("profile_pic", { required: true, maxLength: 20 })}
//                        margin="normal"
//                        variant="outlined"
//                        type="file"
//                        error={!!errors.profile_pic}
//                       helperText={errors.profile_pic && "profile_pic is required"}
//                       onChange={(e) => setImage(e.target.files[0])}
//                     />
//                    {image && (
//                 <img
//                   style={{ height: "180px" }}
//                   src={URL.createObjectURL(image)}
//                   alt=""
//                   className="upload-img"
//                 />
//               )}


         

//                     <Button sx={{marginTop:3,borderRadius:2}} 
//                     variant='contained'
//                      color='warning'
//                      type="submit"
//                      onClick={handleSubmit(onSubmit)}
//                      >Registration</Button>
//                     <Button sx={{marginTop:3,borderRadius:3}} >Change to Login</Button>
//                 </Box>
//             </form>
//         </div>
//   );
// };

// export default Registration;




import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Form, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AddcontactNow } from "../../../../src/Api/Functions/RegisterApi";

import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function Registration() {
    const {mutate,isPending}=useMutation({
        mutationKey:"register",
        mutationFn:AddcontactNow,
        onSuccess:(data)=>{
            if (data.status===200) {
                toast.success(data.message)
                
                
            }

        }
    })
    // console.log("is",isPending);
  const [profile_pic, setprofilepic] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData=new FormData()
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", data.profile_pic[0]);
    mutate(formData)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("first_name", { required: true })}
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="first_name"
                  autoFocus
                  error={errors.first_name}
                  helperText={errors.first_name && "first_name is required"}
                />
              </Grid>
               <Grid item xs={12} sm={6}>
                <TextField
                  {...register("last_name", { required: true })}
                  name="last_name"
                  required
                  fullWidth
                  id="last_name"
                  label="last_name"
                  autoFocus
                  error={errors.last_name}
                  helperText={errors.last_name && "last_name is required"}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: true })}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={errors.email}
                  helperText={errors.email && "email is required"}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  {...register("password", { required: true })}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={errors.password}
                  helperText={errors.password && "password is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("profile_pic", { required: true })}
                  required
                  fullWidth
                  name="profile_pic"
                  type="file"
                  id="profile_pic"
                  onChange={((e)=>setprofilepic(e.target.files[0]))}
                  error={errors.profile_pic}
                  helperText={!profile_pic && errors.profile_pic && "profile_pic is required"}
                />
                {profile_pic!=="" && profile_pic!==null && profile_pic!==undefined?(<>
                <img src={URL.createObjectURL(profile_pic)} alt="" height={"150px"} />
                </>):(<>
                {profile_pic=="" && <p>drag and drop image here</p>}
                </>)}
              </Grid>
            </Grid>
            {isPending?(<>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Loading....
            </Button>
            </>):(<>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </>)}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" to={"/"}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
