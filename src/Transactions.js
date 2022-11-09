import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const columns = [
  // { field: "id", headerName: "ID", width: 300 },
  { field: "customer_id", headerName: "Customer Name", width: 300 },
  { field: "milktype", headerName: "Milk Type", width: 130 },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 200,
  },
  { field: "fat", headerName: "Fat", width: 100 },
  {
    field: "purity",
    headerName: "Purity",
    width: 100,
  },
  {
    field: "param3",
    headerName: "Param3",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 100,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 100,
  },
  {
    field: "buy_price",
    headerName: "Buy Price",
    type: "number",
    width: 100,
  },
  {
    field: "sell_price",
    headerName: "Sell Price",
    type: "number",
    width: 100,
  },
  {
    field: "profit",
    headerName: "Profit",
    type: "number",
    width: 100,
  },
];

export default function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("record/get/");
      data = data.data.map((ele) => ({ ...ele, id: ele._id }));
      await setData(data);
      await setLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 800, color: "#333" }}
        p={2}
      >
        Transaction History
      </Typography>
      {!loading && (
        <div
          style={{ height: "80vh", width: "95%", margin: "20px auto 0 auto" }}
        >
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row) => row.id}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      )}
    </div>
  );
}
