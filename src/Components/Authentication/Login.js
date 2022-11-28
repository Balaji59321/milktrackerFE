import { Button, CircularProgress, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from './../../axios';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    if(!email || !password){
      window.alert("Please Enter all the fields");
      return;
     }
     setLoading(true);
     try{
        const {data} = await axios.post("user/login",{email,password});
        console.log(data);
        setTimeout(()=> {
          {loading && <CircularProgress />}
        },2000)
        localStorage.setItem("user",JSON.stringify(data));
        navigate("/dashboard");
     }
     catch(error){
      window.alert("Something went wrong.Please try again");
     }
     setLoading(false);
  }


  return (
    <Box sx={{display: "flex",flexDirection:"column",gap: 2,width: {xs: "100%",md:"400px"}}}>
        {/* <FormControl id='first-name' required>
            <TextField id="outlined-basic" label={name ? name : "Name"} variant="outlined" onChange={(e) => setName(e.target.value)} value={name}/>
        </FormControl> */}
        <FormControl id='email' required>
            <TextField id="outlined-basic" label={email ? email : "Email"} variant="outlined" onChange={(e) => setEmail(e.target.value)} value={email} />
        </FormControl>
        <FormControl id='password' required>
            <TextField id="outlined-basic" type='password' label={password ? "" : "Password"} variant="outlined" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </FormControl>
        <Button variant='contained' onClick={submitHandler}>Login</Button>
    </Box>
  )
}

export default Login