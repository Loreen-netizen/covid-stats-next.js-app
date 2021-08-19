import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

export const TableLayout = (props) => {
  const { covidData , rows} = props;

 
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
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
      width: 150,
      editable: true,
    },
    {
      field: "deaths",
      headerName: "Deaths",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns} rows={rows}  />
    </div>
  );
};

export default TableLayout;
