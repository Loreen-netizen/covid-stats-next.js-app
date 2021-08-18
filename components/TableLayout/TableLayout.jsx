import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/TableLayout.module.css";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const columns = [
  { field: "date", headerName: "Date", width: 150},
  {
    field: "province",
    headerName: "Province",
    width: 150,
    editable: true,
  },
  {
    field: "cases",
    headerName: "Cases",
    width: 150,
    editable: true,
  },
  {
    field: "recoveries",
    headerName: "Recoveries",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "deaths",
    headerName: "Deaths",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

export const TableLayout = (props) => {
  const { covidData } = props;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} pageSize={5} />
    </div>
  );
};

export default TableLayout;
