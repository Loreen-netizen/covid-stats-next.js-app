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
  const dates = rsa["Dates"];

  const dayMonth = getDayMonthFromUnixTimestamp(timestamp);

  const dateIndex = findIndexForDayMonth(dayMonth, dates);

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
  return [
    gauteng,
    westernCape,
    kwazuluNatal,
    easternCape,
    freeState,
    mpumalanga,
  ];
};

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
