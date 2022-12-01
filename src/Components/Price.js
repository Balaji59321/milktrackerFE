import { Button, FormControl, TextField } from '@mui/material'
import { Box, display } from '@mui/system';
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { ContextConsumer } from '../Config';

const Price = () => {
  const context = ContextConsumer();
  console.log(context);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const changeHandler = async (val) => {
    if(context.user.email === "admin@gmail.com" || (email === 'admin@gmail.com' && password === 'Admin123')){
        await context.setPrice(val)
    }
    else{
        window.alert("Only Admins can change this !")
    }
  }

  return (
   <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}} pt={5}>

    <Box sx={{display:"flex",flexDirection: "column",gap: 2}} py={5}>
        <TextField id="outlined-basic" label="Admin-Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} p={2} />
        <TextField id="outlined-basic" label="Admin-Password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} p={2} />
        {/* <Button variant='outlined'>Submit</Button> */}
    </Box>

    <TextField id="outlined-basic" label="Buy Price - Base Rate" variant="outlined" value={context.price} onChange={e => changeHandler(e.target.value)}/>
   </Box>
  )
}

export default Price