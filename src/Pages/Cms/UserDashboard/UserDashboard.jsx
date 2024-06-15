import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, {useEffect} from 'react'
import { profileAPI } from '../../../../src/Api/Functions/ProfileDetails.Api';
import { Box, Typography,Grid,OutlinedInput,FormLabel ,Card,CardContent,CardMedia, Button} from '@mui/material'

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from '@mui/system';
import { profile_pic } from '../../../Api/Axios/axiosInstance';
import { useDispatch } from "react-redux";
import { resetRe } from "../../../../src/Redux-toolkit/Slice/authSlice";
export default function UserDashboard() {
  const dispatch=useDispatch()

  // const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading: landingpageloading,
    isError: landingpageError,
  } = useQuery({
    queryKey: ["landing-page-details"],
    queryFn: () =>profileAPI (),
  });
  console.log(profile);
  useEffect(()=>{
    dispatch(resetRe(null))

  },[dispatch])
  

  return (
    <>
      
      <div style={{marginBottom:"350px",justifyContent:"center",display:'flex'}}>
    <Box sx={{marginTop:"15rem",width:"21rem"}}>
        <Grid container sx={{height:"100px",width:"700px",display:"flex",justifyContent:"flex-start"}}>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{textAlign:"center",backgroundColor:"grey"}}>
               <img src={profile_pic(profile?.profile_pic)} alt=""                height={"100px"}
              width={"200px"}
              style={{  borderRadius: "50%" }}
 />
                 <Box sx={{marginTop:"30px"}}>
                 
                      <div >
                      
                          <Typography variant='h5' sx={{color:"whitesmoke"}}>First Name: <b>{profile && profile.first_name}</b> </Typography>
                           <Typography variant='h5' sx={{color:"whitesmoke"}}>Last Name:  <b>{profile &&   profile.last_name} </b>  </Typography> 
                          <Typography variant='h5' sx={{color:"whitesmoke"}}>Email Id:  <b>{profile && profile.email }</b>  </Typography>
                
                      </div>
      
                </Box>
                <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ paddingLeft: "8px" ,color:"whitesmoke"}}>
                <FacebookIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke" }}>
                <TwitterIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke"}}>
                <InstagramIcon />
              </Typography>
            </Box>


            </Grid>
          
           

        </Grid>


      
      
    </Box>
    </div>
    </>
  )
}

