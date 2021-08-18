import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/TableLayout.module.css";

export const TableLayout = (props) => {
  const { covidData } = props;
  console.log(covidData, "ccccccccccccoviddatmmmmmmmmma");

  const getCovidData = (covidData) => {
    const rsa = covidData["RSA"];
    const gp= rsa["GP"];
    const wc = rsa["WC"];
    const kzn = rsa["KZN"];
    const ec = rsa["EC"];
    const fs = rsa["FS"];
    const mp = rsa["MP"];

const dateIndex = rsa["Dates"].length-1;

    const gauteng = {
      id: 1,
      date: rsa["Dates"][dateIndex],
      province: "GP",
      cases: gp["Cases"][dateIndex],
      recoveries: gp["Recoveries"][dateIndex],
      deaths: gp["Deaths"][dateIndex],
    };
      const westernCape = {
        id: 2,
        date: rsa["Dates"][dateIndex],
        province: "WC",
        cases: wc["Cases"][dateIndex],
        recoveries: wc["Recoveries"][dateIndex],
        deaths: wc["Deaths"][dateIndex],
      };
      const kwazuluNatal = {
        id: 3,
        date: rsa["Dates"][dateIndex],
        province: "KZN",
        cases: kzn["Cases"][dateIndex],
        recoveries: kzn["Recoveries"][dateIndex],
        deaths: kzn["Deaths"][dateIndex],
      };

       const easternCape = {
         id: 4,
         date: rsa["Dates"][dateIndex],
         province: "EC",
         cases: ec["Cases"][dateIndex],
         recoveries: ec["Recoveries"][dateIndex],
         deaths: ec["Deaths"][dateIndex],
       };
       const freeState = {
         id: 5,
         date: rsa["Dates"][dateIndex],
         province: "FS",
         cases: fs["Cases"][dateIndex],
         recoveries: fs["Recoveries"][dateIndex],
         deaths: fs["Deaths"][dateIndex],
       };
       const mpumalanga = {
         id: 5,
         date: rsa["Dates"][dateIndex],
         province: "MP",
         cases: mp["Cases"][dateIndex],
         recoveries: mp["Recoveries"][dateIndex],
         deaths: mp["Deaths"][dateIndex],
       };
    return [gauteng, westernCape, kwazuluNatal, easternCape, freeState, mpumalanga];
  };

  const rows = getCovidData(covidData);
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
