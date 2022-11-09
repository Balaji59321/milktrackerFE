import { FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Form = ({ label, data, id, changeHandler }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "space-between",
      }}
      py={3}
    >
      <FormLabel id={id} className="textbold">
        {label}
      </FormLabel>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={data}
        onChange={(e) => changeHandler(id, e.target.value)}
      />
    </Box>
  );
};

export default Form;
