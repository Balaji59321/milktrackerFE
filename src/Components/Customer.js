import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./../App.css";
import EnhancedTable from "./Transactions";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Customer = () => {
  const [val, setVal] = useState({
    date: new Date().toLocaleString(),
    milktype: "cow",
    customer_id: "",
    fat: "",
    purity: "",
    param3: "",
    quantity: "",
    buy_price: "34",
    sell_price: "45",
    profit: "11",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCustomerNames = async () => {
      const resp = await axios.get("user/get");
      await setData(
        resp.data.map((ele) => ({ label: ele.name, phone: ele?.phone }))
      );
    };
    getAllCustomerNames();
  }, []);

  const submitForm = async (data) => {
    const resp = await axios.post("record/create", data);
    setVal({
      date: new Date().toLocaleString(),
      milktype: "cow",
      customer_id: "",
      fat: "",
      purity: "",
      param3: "",
      quantity: "",
      buy_price: "34",
      sell_price: "45",
      profit: "11",
    });
  };

  const cancelForm = async () => {
    setVal({
      date: new Date().toLocaleString(),
      milktype: "cow",
      customer_id: "",
      fat: "",
      purity: "",
      param3: "",
      quantity: "",
      buy_price: "34",
      sell_price: "45",
      profit: "11",
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Customer Records</h1>
      <Grid container px={1} style={{ justifyContent: "space-between" }}>
        <Grid
          item
          bgcolor={"#eee"}
          py={2}
          m={0}
          xs={3}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                justifyContent: "space-between",
              }}
              py={3}
            >
              <FormLabel id="customer_id" className="textbold">
                Customer Name
              </FormLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Customer"
                    onSelect={(e, value) => {
                      setVal({ ...val, customer_id: e.target.value });
                    }}
                    value={val.customer_id}
                  />
                )}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              p={2}
            >
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="textbold"
              >
                Milk Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={val.milktype}
                name="radio-buttons-group"
              >
                <Box>
                  <FormControlLabel
                    value="cow"
                    control={<Radio />}
                    label="Cow"
                    onChange={(e) =>
                      setVal({ ...val, milktype: e.target.value })
                    }
                    checked={val.milktype === "cow"}
                  />
                  <FormControlLabel
                    value="buffalo"
                    control={<Radio />}
                    label="Buffalo"
                    onChange={(e) =>
                      setVal({ ...val, milktype: e.target.value })
                    }
                    checked={val.milktype === "buffalo"}
                  />
                </Box>
              </RadioGroup>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              p={2}
            >
              <FormLabel id="fat" className="textbold">
                Fat
              </FormLabel>
              <TextField
                id="outlined-basic"
                label="Fat"
                variant="outlined"
                value={val.fat}
                onChange={(e) => setVal({ ...val, fat: e.target.value })}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                justifyContent: "space-between",
              }}
              p={2}
            >
              <FormLabel id="purity" className="textbold">
                Purity
              </FormLabel>
              <TextField
                id="outlined-basic"
                label="Purity"
                variant="outlined"
                value={val.purity}
                onChange={(e) => setVal({ ...val, purity: e.target.value })}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                justifyContent: "space-between",
              }}
              p={2}
            >
              <FormLabel id="purity" className="textbold">
                Param3
              </FormLabel>
              <TextField
                id="outlined-basic"
                label="Param3"
                variant="outlined"
                value={val.param3}
                onChange={(e) => setVal({ ...val, param3: e.target.value })}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                justifyContent: "space-between",
              }}
              p={2}
            >
              <FormLabel id="quantity" className="textbold">
                Quantity
              </FormLabel>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                value={val.quantity}
                onChange={(e) => setVal({ ...val, quantity: e.target.value })}
              />
            </Box>
            <Box p={2} style={{ textAlign: "center" }}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                style={{ width: "100%" }}
              >
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="DateTimePicker"
                  value={val.date}
                  onChange={(newValue) => {
                    setVal({ ...val, date: newValue });
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                Seller Price Value (in Rs) - <b>{10}</b>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                Buyer Price Value (in Rs) - <b>{10}</b>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                Gain Amount (in Rs) - <b>{10}</b>
              </Typography>
            </Box>
            <Box
              style={{ justifyContent: "center", gap: "20px", display: "flex" }}
              mt={3}
            >
              <Button
                variant="contained"
                style={{ width: "150px" }}
                onClick={() => submitForm(val)}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                style={{ width: "150px" }}
                onClick={cancelForm}
              >
                Cancel
              </Button>
            </Box>
          </FormControl>
        </Grid>
        <Grid
          item
          bgcolor={"#eee"}
          py={3}
          m={0}
          xs={8.8}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <EnhancedTable
            editHandler={(data) => {
              setVal({
                date: new Date().toLocaleString(),
                milktype: data.milktype.toString().toLowerCase(),
                customer_id: data.customername,
                fat: data.fat,
                purity: data.purity,
                param3: data.param3,
                quantity: data.quantity,
                buy_price: data.buy_price,
                sell_price: data.sell_price,
                profit: data.profit,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Customer;
