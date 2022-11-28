import { Box, Button, Typography } from "@mui/material";
import axios from "./../axios";
import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import {ContextConsumer} from "./../Config";

const Users = () => {
  
  const {user} = ContextConsumer();
  const config = {
    headers: {
      "Content-Type" : "application/json",
      Authorization : `Bearer ${user.token}`
    } 
  }

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalData, setModalData] = useState({
    address: "",
    district: "",
    landmark: "",
    locality: "",
    name: "",
    pincode: "",
    state: "",
    _id: "",
    phone: "",
  });
  const clickHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getAllUsers = async () => {
      let resp = await axios.get("user/get",config);
      await setUsers(resp.data);
    };
    getAllUsers();
  }, [showModal]);

  const editHandler = async (data) => {
    await setShowModal(!showModal);
    await setModalData({
      address: data.address,
      district: data.district,
      landmark: data.landmark,
      locality: data.locality,
      name: data.name,
      pincode: data.pincode,
      state: data.state,
      phone: data.phone,
      _id: data._id,
    });
  };

  const deleteHandler = async (id) => {
    const resp = await axios.delete("user/remove/" + id,config);
    console.log(resp.data);
    setUsers(users.filter((ele) => ele._id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
      }}
      pt={3}
    >
      <Button
        variant="contained"
        sx={{ width: "20%" }}
        onClick={() => clickHandler()}
      >
        + Add User
      </Button>
      <Typography variant="h5" py={3}>
        Active Users
      </Typography>
      {showModal && (
        <AddUser
          data={modalData}
          cancelData={() => {
            setModalData({
              address: "",
              district: "",
              landmark: "",
              locality: "",
              name: "",
              pincode: "",
              state: "",
              _id: "",
              phone: "",
            });
            setShowModal((prev) => !prev);
          }}
          updateData={(id, value) =>
            setModalData((prevData) => ({ ...prevData, [id]: value }))
          }
        />
      )}
      {users.map((ele) => (
        <Box
          key={Math.random()}
          sx={{
            display: "flex",
            width: { md: "80%" },
            justifyContent: "space-between",
          }}
          bgcolor="#eee"
          py={3}
          my={1}
          px={2}
          mx={1}
        >
          <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "300px",
                gap: "10px",
              }}
            >
              <div>
                <b>Name :</b> {ele.name}
              </div>
              <div>
                <b>Address :</b> {ele.address}
              </div>
              <div>
                <b>Locality :</b>
                {ele.locality}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "300px",
                gap: "10px",
              }}
            >
              <div>
                <b>Landmark :</b> {ele.landmark}
              </div>
              <div>
                <b>District :</b> {ele.district}
              </div>
              <div>
                <b>State :</b> {ele?.state}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "300px",
                gap: "10px",
              }}
            >
              <div>
                <b>PinCode :</b> {ele.pincode}
              </div>
              <div>
                <b>Phone Number :</b> {ele?.phone}
              </div>
            </Box>
          </Box>
          <Box
            px={2}
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Button variant="contained" onClick={() => editHandler(ele)}>
              Edit
            </Button>
            <Button variant="contained" onClick={() => deleteHandler(ele._id)}>
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Users;
