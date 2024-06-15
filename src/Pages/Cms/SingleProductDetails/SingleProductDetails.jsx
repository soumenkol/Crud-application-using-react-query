import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { myproduct } from '../../../Api/Axios/axiosInstance';
import { detailsApi } from '../../../Api/Functions/Details.Api';


export default function SingleProductDetails() {
  const { id } = useParams();
  console.log(id,"id");
  const {
    data: details,
    
    isLoading: landingpageloading,
    isError: landingpageError,
  } = useQuery({
    queryKey: ["landing-page-details"],
    queryFn: () => detailsApi(id),
  });
  console.log(details,"details page");
  return (
    <>
        <Box marginTop={12}>
        <Grid container sx={{ marginTop: "20px" }} spacing={3}>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card>
              {details && details.image && (
                <CardMedia
                  component="img"
                  height="470px"
                  image={myproduct(details.image)}
                  alt="test image"
                />
              )}
            </Card>
          </Grid>

          <Grid item md={6} lg={6} sm={6} xs={12}>
            <CardContent>
              <Typography variant="h4" textAlign="center" marginBottom={2}>
                Product Detail
              </Typography>
              <hr />
              <Typography variant="h4" textAlign="center">
                {details && details.title}
              </Typography>
              <Typography variant="h6" textAlign="center" mt={2}>
                {details && details.description}
              </Typography>

              <Link to={`/Edit/${id}`}>
                <Button
                  variant='contained'
                  sx={{ marginLeft: "1rem", width: "6rem", marginTop: "2rem" }}
                >
                  Edit
                </Button>
              </Link>



            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}











