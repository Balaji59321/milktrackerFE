import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "./../axios";
import { getDate } from "date-fns";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [todayCustomer, setTodayCustomer] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [cowQuantity, setCowQuantity] = useState(0);
  const [buffaloQuantity, setBuffaloQuantity] = useState(0);
  useEffect(() => {
    const getData = async () => {
      await setTotalCustomer(
        (
          await axios.get("dashboard/getCustomer")
        ).data.count
      );
      await setTodayCustomer(
        (
          await axios.get("dashboard/getTodayCustomer")
        ).data.count
      );
      await setBuyPrice(
        (
          await axios.get("dashboard/buyPrice")
        ).data.price
      );
      await setSellPrice(
        (
          await axios.get("dashboard/sellPrice")
        ).data.price
      );
      await setCowQuantity(
        (
          await axios.get("dashboard/cow")
        ).data.quantity
      );
      await setBuffaloQuantity(
        (
          await axios.get("dashboard/cow")
        ).data.quantity
      );
    };
    getData();
  }, []);

  return (
    <div>
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontSize: "24px" }}
        mt={3}
      >
        Today Milestones
      </Typography>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          gap: "10px",
          width: "70%",
          margin: "50px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Count of Happy Customers</Typography>
          <Typography style={{ fontSize: "32px" }}>{totalCustomer}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Customers Visited Today</Typography>
          <Typography style={{ fontSize: "32px" }}>{todayCustomer}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">% of Customer Visted</Typography>
          <Typography style={{ fontSize: "32px" }}>
            {(todayCustomer / totalCustomer) * 100}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          gap: "20px",
          width: "70%",
          margin: "50px auto",
        }}
      >
        <Box
          sx={{
            display: "flex", 
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Buy Price</Typography>
          <Typography style={{ fontSize: "32px" }}>{buyPrice}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Sell Price</Typography>
          <Typography style={{ fontSize: "32px" }}>{sellPrice}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Profit Amount (in Rs)</Typography>
          <Typography style={{ fontSize: "32px" }}>
            {sellPrice - buyPrice}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          gap: "20px",
          width: "70%",
          margin: "50px auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Cow Milk Quantity</Typography>
          <Typography style={{ fontSize: "32px" }}>{cowQuantity}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Buffalo Milk Quantity</Typography>
          <Typography style={{ fontSize: "32px" }}>
            {buffaloQuantity}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            borderRadius: "3px",
            border: "1px solid #555",
            width: "250px",
          }}
          p={4}
          bgcolor={"#ddd"}
        >
          <Typography variant="h6">Total Milk (in Litres)</Typography>
          <Typography style={{ fontSize: "32px" }}>
            {cowQuantity + buffaloQuantity}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

// Total number of customers visited today
// total quantity of milk collected today
// toal buy price
// total sell price
//  total profit
export default Dashboard;
