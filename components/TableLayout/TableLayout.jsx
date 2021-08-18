import React, {useState, useEffect} from "react";
import { DataGrid } from "@material-ui/data-grid";
import { v4 as uuidv4 } from 'uuid';
import styles from "../../styles/TableLayout.module.css"

const columns = [
  { field: "title1", headerName: "Province" },
  { field: "title2", headerName: "Confirmed Cases" },
  { field: "title3", headerName: " Recoveries" },
  { field: "title4", headerName: "Deaths" },
];


 

export const TableLayout = (props) => {
  const {covidData} = props;
  const id=uuidv4();
  console.log("!!!!!!!!!!!",(Object.keys(covidData)).map((item)=>item));
  
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <DataGrid
     
        rows={Object.keys(covidData).map((item) =>{
          return (
           [{...item,
            id:{id}}] 
          )
        })}
        columns={columns}
        pageSize={5}
         rowsPerPageOptions={[5, 10, 20]}
      /> */}

      <table style={{ height: 400, width: "100%" }}>
        <tr>
          {Object.keys(covidData.RSA.GP).map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
        <tr>
          <td>
            {Object.keys(covidData.RSA.GP.Cases).map((item) => item)}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TableLayout;
