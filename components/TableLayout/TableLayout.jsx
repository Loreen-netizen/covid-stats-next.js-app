import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getDataByDate } from "../../services/covidService";

export const TableLayout = (props) => {
  const { covidData } = props;

  const rows = getDataByDate(new Date().getTime());
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
      <DataGrid columns={columns} rows={rows} pageSize={5} />
    </div>
  );
};

export default TableLayout;
