import data from "../data/covidData";
import { getDayMonthFromUnixTimestamp } from "../utils/dateUtils";

const findIndexForDayMonth = (dayMonth, dates) => {
  return dates.lastIndexOf(dayMonth);
};

export const getDataByDate = (timestamp) => {
  const rsa = data["RSA"];
  const gp = rsa["GP"];
  const wc = rsa["WC"];
  const kzn = rsa["KZN"];
  const ec = rsa["EC"];
  const fs = rsa["FS"];
  const mp = rsa["MP"];
  const lp = rsa["LP"];
  const nw = rsa["NW"];
  const nc = rsa["NC"];
  const dates = rsa["Dates"];

  const dayMonth = getDayMonthFromUnixTimestamp(timestamp);

  let dateIndex =
    findIndexForDayMonth(dayMonth, dates) === -1
      ? dates.length - 1
      : findIndexForDayMonth(dayMonth, dates);

  const gauteng = {
    id: 1,
    date: rsa["Dates"][dateIndex],
    province: "GP",
    cases: gp["Cases"][dateIndex],
    recoveries: gp["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      gp["Cases"][dateIndex],
      gp["Recoveries"][dateIndex],
      gp["Deaths"][dateIndex]
    ),
    deaths: gp["Deaths"][dateIndex],
  };
  const westernCape = {
    id: 2,
    date: rsa["Dates"][dateIndex],
    province: "WC",
    cases: wc["Cases"][dateIndex],
    recoveries: wc["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      wc["Cases"][dateIndex],
      wc["Recoveries"][dateIndex],
      wc["Deaths"][dateIndex]
    ),
    deaths: wc["Deaths"][dateIndex],
  };
  const kwazuluNatal = {
    id: 3,
    date: rsa["Dates"][dateIndex],
    province: "KZN",
    cases: kzn["Cases"][dateIndex],
    recoveries: kzn["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      kzn["Cases"][dateIndex],
      kzn["Recoveries"][dateIndex],
      kzn["Deaths"][dateIndex]
    ),
    deaths: kzn["Deaths"][dateIndex],
  };

  const easternCape = {
    id: 4,
    date: rsa["Dates"][dateIndex],
    province: "EC",
    cases: ec["Cases"][dateIndex],
    recoveries: ec["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      ec["Cases"][dateIndex],
      ec["Recoveries"][dateIndex],
      ec["Deaths"][dateIndex]
    ),
    deaths: ec["Deaths"][dateIndex],
  };
  const freeState = {
    id: 5,
    date: rsa["Dates"][dateIndex],
    province: "FS",
    cases: fs["Cases"][dateIndex],
    recoveries: fs["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      fs["Cases"][dateIndex],
      fs["Recoveries"][dateIndex],
      fs["Deaths"][dateIndex]
    ),
    deaths: fs["Deaths"][dateIndex],
  };
  const mpumalanga = {
    id: 6,
    date: rsa["Dates"][dateIndex],
    province: "MP",
    cases: mp["Cases"][dateIndex],
    recoveries: mp["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      mp["Cases"][dateIndex],
      mp["Recoveries"][dateIndex],
      mp["Deaths"][dateIndex]
    ),
    deaths: mp["Deaths"][dateIndex],
  };

  const limpopo = {
    id: 7,
    date: rsa["Dates"][dateIndex],
    province: "LP",
    cases: lp["Cases"][dateIndex],
    recoveries: lp["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      lp["Cases"][dateIndex],
      lp["Recoveries"][dateIndex],
      lp["Deaths"][dateIndex]
    ),
    deaths: lp["Deaths"][dateIndex],
  };

  const northWest = {
    id: 8,
    date: rsa["Dates"][dateIndex],
    province: "NW",
    cases: nw["Cases"][dateIndex],
    recoveries: nw["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      nw["Cases"][dateIndex],
      nw["Recoveries"][dateIndex],
      nw["Deaths"][dateIndex]
    ),
    deaths: nw["Deaths"][dateIndex],
  };
  const northenCape = {
    id: 9,
    date: rsa["Dates"][dateIndex],
    province: "NC",
    cases: nc["Cases"][dateIndex],
    recoveries: nc["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(
      nc["Cases"][dateIndex],
      nc["Recoveries"][dateIndex],
      nc["Deaths"][dateIndex]
    ),
    deaths: nc["Deaths"][dateIndex],
  };

  return [
    gauteng,
    westernCape,
    kwazuluNatal,
    easternCape,
    freeState,
    mpumalanga,
    limpopo,
    northWest,
    northenCape,
  ];
};

export const columnData = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    {
      field: "province",
      headerName: "Province",
      width: 200,
      sortable: false,
    },
    {
      field: "cases",
      headerName: "Cases",
      width: 200,
      sortable: false,
    },
    {
      field: "recoveries",
      headerName: "Recoveries",
      type: "number",
      width: 200,
      sortable: false,
    },
    {
      field: "activeCases",
      headerName: "Active Cases",
      type: "number",
      width: 200,
      sortable: false,
    },
    {
      field: "deaths",
      headerName: "Deaths",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
  ];
  return columns;
};

export const nationalCasesToday = () => {
  const rsa = data["RSA"];
  const nationalData = rsa["National"];
  const todaysCases = getDataByDate(new Date());

  const numberOfNationalCases = ` ${Object.keys(nationalData)[0]} = ${[
    todaysCases,
  ][0].reduce((total, item) => {
    return total + parseInt(item.cases);
  }, 0)}`;
  return numberOfNationalCases;
};


const calculateActiveCases = (cases, recoveries, deaths) => {
  const activeCasesCount = cases - recoveries - deaths;
  return activeCasesCount;
};
