import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button,  TextField, Typography,Box } from "@mui/material";
import { Createapi } from "../../../Api/Functions/Create.Api";
const Create = () => {
  const [image, setImage] = useState(null);
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const mutation=useMutation({
    mutationFn:Createapi,
    onSuccess:(data)=>{
      if(data.status===200){
        toast.success(data.message)
        // navigate('/ProductList')
        reset()
      }
      else{
        if(data.status===201){
          toast.error(data.message)
        }
      }
    }
})

  const onSubmit = async (data) => {
    // try {
    //   await mutation.mutateAsync(data);
    // } catch (error) {
    //   console.error(error);
    // }

    const formData=new FormData()
    formData.append("title",data.title)
    formData.append("description",data.description)
    formData.append("image", data.image[0]);
    mutation.mutate(formData)
  };

  return (
    

    <div>
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
            <Typography  variant='h4' padding={3} textAlign="center">Create</Typography>
           
            <TextField
                {...register("title", { required: true, maxLength: 20 })}
                label="title"
                margin="normal"
                variant="outlined"
                error={errors.title}
                helperText={errors.title && "title is required"}
              />
           <TextField
                {...register("description", { required: true, maxLength: 20 })}
                label="description"
                margin="normal"
                variant="outlined"
                error={errors.description}
                helperText={errors.description && "description is required"}
              />
              <TextField
                      {...register("image", { required: true, maxLength: 20 })}
                       margin="normal"
                       variant="outlined"
                       type="file"
                       error={!!errors.image}
                      helperText={errors.image && "image is required"}
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
</div>

  );
};

export default Create;


