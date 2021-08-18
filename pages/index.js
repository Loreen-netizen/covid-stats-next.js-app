import React, { useState, useEffect } from "react";
import Head from "next/head";
import Table from "../components/TableLayout/TableLayout";
import moment from "moment";
import { rawData } from "../data/covidData";
import { getDataByDate } from "../services/covidService";

export default function Home(data) {
  const covidData = data.data;

  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [rows, setRows] = useState([]);

  const handleDateSelection = (e) => {
    setSelectedDate(e.target.value);
  };

  useEffect(() => {
    const timeStamp = new Date(selectedDate).getTime();
    const tempRows = getDataByDate(timeStamp);
  

    const tempTimestamp = moment(selectedDate, "YYYY-MM-DD")
    
    setRows(tempRows);
  }, [selectedDate]);

  return (
    <>
      <Head>
        <title> Covid-Stats</title>
      </Head>
      <h1> Covid-19 Statistics</h1>
      <div>
        <label htmlFor="datePicker">Select Date</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => handleDateSelection(e)}
        />
      </div>
      <Table covidData={covidData} rows={rows} />
    </>
  );
}

export const getStaticProps = async () => {
  // const response = await fetch(  "https://corona-stats.mobi/api/json.2.0.php?key=UTSiraH8NBz3JblhOcVI"
  const data = rawData;
  // );
  // const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
