import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import axios from "./../axios";
import React, { useEffect } from "react";
import Form from "./form";
import { ContextConsumer } from "../Config";

const AddUser = ({ data, cancelData, updateData }) => {
  useEffect(() => {}, [data]);

  const {user} = ContextConsumer();
  const config = {
    headers: {
      "Content-Type" : "application/json",
      Authorization : `Bearer ${user.token}`
    } 
  }

  const saveHandler = async () => {
    let id = data._id;
    delete data._id;
    if (id) {
      const resp = await axios.put(
        "user/update/" + id,
        data,
        config
      );
      cancelData();
    } else {
      const resp = await axios.post("user/create/", data, config);
      cancelData();
    }
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <FormControl style={{ backgroundColor: "#eee", padding: "30px" }}>
        <Grid item sx={{ display: "flex", gap: "25px" }}>
          <Form
            label={"Customer Name"}
            data={data.name}
            changeHandler={(id, value) => updateData(id, value)}
            id="name"
          />
          <Form
            label={"Address"}
            data={data.address}
            changeHandler={(id, value) => updateData(id, value)}
            id="address"
          />
          <Form
            label={"Locality"}
            data={data.locality}
            changeHandler={(id, value) => updateData(id, value)}
            id="locality"
          />
        </Grid>
        <Grid item sx={{ display: "flex", gap: "25px" }}>
          <Form
            label={"Landmark"}
            data={data.landmark}
            changeHandler={(id, value) => updateData(id, value)}
            id="landmark"
          />
          <Form
            label={"District"}
            data={data.district}
            changeHandler={(id, value) => updateData(id, value)}
            id="district"
          />
          <Form
            label={"State"}
            data={data.state}
            changeHandler={(id, value) => updateData(id, value)}
            id="state"
          />
        </Grid>
        <Grid item sx={{ display: "flex", gap: "25px" }}>
          <Form
            label={"Pincode"}
            data={data.pincode}
            changeHandler={(id, value) => updateData(id, value)}
            id="pincode"
          />
          <Form
            label={"Phone Number"}
            data={data.phone}
            changeHandler={(id, value) => updateData(id, value)}
            id="phone"
          />
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center" }} m={3}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
            <Button
              variant="contained"
              style={{ width: "100px" }}
              onClick={() => saveHandler()}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{ width: "100px" }}
              onClick={() => cancelData()}
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </FormControl>
    </Grid>
  );
};

export default AddUser;
