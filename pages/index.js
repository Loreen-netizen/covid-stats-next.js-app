import React, { useState, useEffect } from "react";
import moment from "moment";
import Head from "next/head";

import { rawData } from "../data/covidData";
import Table from "../components/tableLayout/tableLayout";
import { getDataByDate } from "../services/covidService";
import NationalStatisticsCard from "../components/nationalStatisticsCard/nationalStatisticsCard";
import styles from "../styles/landingPage.module.css";

export const getStaticProps = () => {
  const data = rawData;
  return {
    props: {
      data,
    },
  };
};

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
    const rowsData = getDataByDate(timeStamp);

    setRows(rowsData);
  }, [selectedDate]);

  return (
    <>
      <Head>
        <title> Covid-Stats</title>
      </Head>
      <h4 className={styles.titleText}> Covid-19 Statistics</h4>

      <NationalStatisticsCard />

      <div className={styles.inputDiv}>
        <label htmlFor="datePicker" className={styles.inputLabelText}>
          Select Date
        </label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => handleDateSelection(e)}
          className={styles.inputInnerText}
        />
      </div>
      <Table rows={rows} />
    </>
  );
}
