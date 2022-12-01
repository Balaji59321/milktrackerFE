import { FormControl, TextField } from '@mui/material'
import { Box, display } from '@mui/system';
import React from 'react'
import { Form } from 'react-router-dom'
import { ContextConsumer } from '../Config';

const Price = () => {
  const context = ContextConsumer();
  console.log(context);

  const changeHandler = async (val) => {
    if(context.user.email === "admin@gmail.com"){
        await context.setPrice(val)
    }
    else{
        window.alert("Only Admins can change this !")
    }
  }

  return (
   <Box sx={{display: "flex",justifyContent: "center",alignItems: "center"}} pt={5}>
    <TextField id="outlined-basic" label="Buy Price - Base Rate" variant="outlined" value={context.price} onChange={e => changeHandler(e.target.value)}/>
   </Box>
  )
}

export default Price