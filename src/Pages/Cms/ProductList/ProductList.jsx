// import React from "react";
// import { Getlandingpagedetails, listAPI } from "../../../../src/Api/Functions/List.Api";
// import { useQuery } from "@tanstack/react-query";

// export default function Product_List() {
//   const {
//     data: landingpagedetails,
//     isLoading: landingpageloading,
//     isError: landingpageError,
//   } = useQuery({
//     queryKey: ["landing-page-details"],
//     queryFn: () => listAPI(),
//   });
//   console.log(landingpagedetails, "landingpagedetails");
//   return (
//     <>
//       {Array.isArray(landingpagedetails) &&
//         landingpagedetails.map((item) => {
//           return (
//             <>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </>
//           );
//         })}
//     </>
//   );
// }

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { listAPI } from "../../../../src/Api/Functions/List.Api";
import { myproduct } from "../../../Api/Axios/axiosInstance";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DeleteApi } from "../../../../src/Api/Functions/Delete.Api";
import Swal from "sweetalert2";

export default function ProductList() {
  const queryClient = useQueryClient();

  const {
    data: landingpagedetails,
    isLoading: landingpageloading,
    isError: landingpageError,
  } = useQuery({
    queryKey: ["landing-page-details"],
    queryFn: () => listAPI(),
  });

  const mutation = useMutation({
    mutationFn: DeleteApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries("landing-page-details");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDelete = async (id) => {
    const formData = new FormData();
    formData.append("id", id);
    mutation.mutate(formData);
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        marginTop: "90px",
        gap: "2rem",
        marginBottom: "20rem",
      }}
    >
      {Array.isArray(landingpagedetails) &&
        landingpagedetails.map((item, index) => (
          <Card sx={{ maxWidth: "300px" }} key={index}>
            <CardMedia sx={{ height: "260px" }} image={myproduct(item.image)} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleRemove(item._id)}
              >
                {" "}
                Delete{" "}
              </Button>

              <Link to={`/singleproduct/${item._id}`}>
                <Button variant="contained">Details</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
    </div>
  );
}
