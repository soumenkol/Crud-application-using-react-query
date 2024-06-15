import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react"; 
import {updateApi} from "../../../../src/Api/Functions/Update.Api"
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { detailsApi } from "../../../../src/Api/Functions/Details.Api";

export default function Edit() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null); 
  const [form, setFormData] = useState({});
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation({
    mutationFn: updateApi,
    onSuccess: (data) => {
      //toast.success(data.message);

      if (data.status === 200) {
                toast.success(data.message);
                navigate("/ProductList")
              } else {
                if (data.status === 201) {
                  toast.error(data.message);
                }
              }


    },
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data  = await detailsApi(id);
        setFormData(data);
        console.log(data, "data");
      } catch (error) {}
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("id", id);
    formData.append("image", data.image[0]);
    mutate(formData);
  };

  useEffect(() => {
    setValue("title", form?.title );
    setValue("description", form?.description);
    setValue("image", form?.image);
  }, [form, setValue]);
  console.log(form, "formData");
  return (
    <>
<form>
        <Box display="flex"
         flexDirection={"column"} 
          maxWidth={400}
          alignItems={'center'} 
          justifyContent={'center'}
          margin="auto" marginTop={5}
          padding={3} borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{":hover":{
                 boxShadow:"10px 10px 20px #ccc"
          },}}>
            <Typography  variant='h4' padding={3} textAlign="center">Edit</Typography>
            <TextField
                  {...register("title", {
                    required: "Title is required",
                  })}
                  label="Your title"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={errors.title}
                  helperText={errors.title && errors.title.message}
                  defaultValue={form?.title || ""}
                />
            <TextField
                  {...register("description", { required: true })}
                  label="Description"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={errors.description && "Description is required"}
                  defaultValue={form?.description || ""}
                />

<TextField
                 {...register("image", { required: true, maxLength: 20 })}
                 fullWidth
               margin="normal"
               variant="outlined"
                type="file"
               autoFocus
                error={!!errors.image}
                 helperText={ !image && errors.image && "Image required"}
                 defaultValue={form?.image || ""}
                onChange={(e) => setImage(e.target.files[0])} 
              />
           
           {image && (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="upload-img"
                />
              )}



                   
            <Button sx={{marginTop:3,borderRadius:2}} 
            variant='contained'
             color='warning'
             type="submit"
             onClick={handleSubmit(onSubmit)}
             >Submit</Button>
            
        </Box>
    </form>


    </>
  );
}
