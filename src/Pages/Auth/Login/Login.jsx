

//  import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// // import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// // import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import Link from "react-router-dom";
// import { Link } from "react-router-dom";



// import { useMutation } from "@tanstack/react-query";


// import { toast } from "react-toastify";
// import { useForm } from 'react-hook-form';
// import { AddcontactNow } from "../../../Api/Functions/Login.Api";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export default function Login() {
 
//   const{register,handleSubmit,formState:{errors}}=useForm()

//   const {mutate,data}=useMutation({
//       mutationFn:AddcontactNow,
//       onSuccess:(data)=>{
//           if(data.status===200){
//             toast.success(data.message)
//             localStorage.setItem("token",data.token)
//           }
//           else{
//             if(data.status===201){
// toast.error(data.message)
//             }
//           }
//       }
//   })


 

 
//   const onSubmit=(data)=>{
//     const formData=new FormData()
//     formData.append("email",data.email)
//     formData.append("password",data.password)

//      mutate(formData)
    
//   }

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
         
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//                       noValidate
//             sx={{ mt: 1 }}
//           >
          


//     <TextField   
//     {...register("email",{required:true,maxLength:20})}
//     fullWidth
//     error={errors.email}
//     helperText={errors.email && "Email is required"}
//     autoFocus
//     label="Email"
//     id="email"
//     margin="normal"

    
//     />

//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               {...register("password", { required: true, maxLength: 20 })}
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               error={errors.password}
//               helperText={errors.password && "Password is required"}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleSubmit(onSubmit)}  
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link to="/Registration" variant="body2" style={{cursor:"pointer"}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

//My design

// import React from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { AddcontactNow } from "../../../../src/Api/Functions/Login.Api";
// import { useMutation } from "@tanstack/react-query";
// import { Button, Container, Grid, Paper, TextField, Typography,Box } from "@mui/material";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const mutation = useMutation({
//     mutationFn: AddcontactNow,
//     onSuccess: (data) => {
//       // toast.success("Successfully Login ");

//       if(data.status===200){
//                     toast.success(data.message)
//                      localStorage.setItem("token",data.token)
//                   }
//                   else{
//                     if(data.status===201){
//                       toast.error(data.message)
//                     }
//                   }
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       await mutation.mutateAsync(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
    


//     <div>
//     <form>
//         <Box display="flex"
//          flexDirection={"column"} 
//           maxWidth={400}
//           alignItems={'center'} 
//           justifyContent={'center'}
//           margin="auto" marginTop={5}
//           padding={3} borderRadius={5}
//           boxShadow={'5px 5px 10px #ccc'}
//           sx={{":hover":{
//                  boxShadow:"10px 10px 20px #ccc"
//           },}}>
//             <Typography  variant='h4' padding={3} textAlign="center">Login</Typography>
           
//             <TextField {...register("email", {
//           required: "Email is required",
//           pattern: {
//             value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//             message: "Invalid email format",
//           },
//         })}
//         margin='normal' 
//         type={'email'}
//         variant='outlined'
//         label='Email'
//         error={errors.email}
//         helperText={errors.email && "email is required"}/>
//             <TextField   {...register("password", { required: true })}
//              margin='normal'
//              type={'password'}
//               variant='outlined' 
//               label='Password'/>
//             <Button sx={{marginTop:3,borderRadius:2}} 
//             variant='contained'
//              color='warning'
//              type="submit"
//              onClick={handleSubmit(onSubmit)}
//              >Login</Button>
//             <Link sx={{marginTop:3,borderRadius:3}}  to='/Registration' >Change to Registration</Link>
//         </Box>
//     </form>
// </div>
//   );
// };

// export default Login;





// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from 'react-router-dom';
// // import { toast } from "react-toastify";
// // import { AddcontactNow } from "../../../../src/Api/Functions/Login.Api";
// // import { useMutation } from "@tanstack/react-query";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginApi } from '../../../../src/Redux-toolkit/Slice/authSlice';
// import { useEffect } from 'react';

// import { Button, Container, Grid, Paper, TextField, Typography,Box } from "@mui/material";

// const Login = () => {
//   const navigate=useNavigate()
//     const dispatch=useDispatch()
//     const data=useSelector((state)=>state.login)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
  

//   const onSubmit = (data) =>{
//     const value={
//         "email":data.email,
//         "password":data.password
//     }
//     dispatch(loginApi(value))

//   }
//   useEffect(()=>{
//     const fetch=()=>{
//         const token=localStorage.getItem("token")
//         const path=window.location.pathname==="/"
//         if (token) {
//             return path && navigate("/Home")
            
//         }
//     }
//     fetch()
//   },[navigate,data.isRedirect])

//   return (
    


//     <div>
//     <form>
//         <Box display="flex"
//          flexDirection={"column"} 
//           maxWidth={400}
//           alignItems={'center'} 
//           justifyContent={'center'}
//           margin="auto" marginTop={5}
//           padding={3} borderRadius={5}
//           boxShadow={'5px 5px 10px #ccc'}
//           sx={{":hover":{
//                  boxShadow:"10px 10px 20px #ccc"
//           },}}>
//             <Typography  variant='h4' padding={3} textAlign="center">Login</Typography>
           
//             <TextField {...register("email", {
//           required: "Email is required",
//           pattern: {
//             value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//             message: "Invalid email format",
//           },
//         })}
//         margin='normal' 
//         type={'email'}
//         variant='outlined'
//         label='Email'
//         error={errors.email}
//         helperText={errors.email && "email is required"}/>
//             <TextField   {...register("password", { required: true })}
//              margin='normal'
//              type={'password'}
//               variant='outlined' 
//               label='Password'/>

// {data.status==="idle"?(<>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//            </>):(<>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Loading...
//             </Button>
//            </>)}
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2" to={"/forgot"}>
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2" to={"/registration"}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
        
        
//     </form>
// </div>
//   );
// };

// export default Login;



import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../../../src/Redux-toolkit/Slice/authSlice';
import { useEffect } from 'react';



const defaultTheme = createTheme();

export default function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.login)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        const value={
            "email":data.email,
            "password":data.password
        }
        dispatch(loginApi(value))

      }
      useEffect(()=>{
        const fetch=()=>{
            const token=localStorage.getItem("token")
            const path=window.location.pathname==="/"
            if (token) {
                return path && navigate("/Home")
                
            }
        }
        fetch()
      },[navigate,data.isRedirect])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
            {...register("email",{required:true})}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errors.email}
              helperText={errors.email && "email is required"}
            />
            <TextField
            {...register("password",{required:true})}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors.password}
              helperText={errors.password && "password is required"}
            />
           
           {data.status==="idle"?(<>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           </>):(<>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Loading...
            </Button>
           </>)}
            <Grid container  justifyContent="flex-end">
           
              <Grid item>
                <Link href="#" variant="body2" to={"/registration"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}