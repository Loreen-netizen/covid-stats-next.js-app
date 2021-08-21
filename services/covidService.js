import data from "../data/covidData";
import { getDayMonthFromUnixTimestamp } from "../utils/dateUtils";

const findIndexForDayMonth = (dayMonth, dates) => {
  return dates.lastIndexOf(dayMonth);
};

export const getDataByDate = (timestamp) => {
  const rsaObject = data["RSA"];
  const datesArray = data.RSA["Dates"];
  const {
    GP: gpObject,
    WC: wcObject,
    KZN: kznObject,
    EC: ecObject,
    FS: fsObject,
    MP: mpObject,
    LP: lpObject,
    NW: nwObject,
    NC: ncObject,
  } = data.RSA;

  const dayMonthString = getDayMonthFromUnixTimestamp(timestamp);

  let dateIndex =
    findIndexForDayMonth(dayMonthString, datesArray) === -1
      ? datesArray.length - 1
      : findIndexForDayMonth(dayMonthString, datesArray);

  const gauteng = {
    id: 1,
    date: rsaObject["Dates"][dateIndex],
    province: "GP",
    cases: gpObject["Cases"][dateIndex],
    recoveries: gpObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(gpObject, dateIndex),
    deaths: gpObject["Deaths"][dateIndex],
  };
  const westernCape = {
    id: 2,
    date: rsaObject["Dates"][dateIndex],
    province: "WC",
    cases: wcObject["Cases"][dateIndex],
    recoveries: wcObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(wcObject, dateIndex),
    deaths: wcObject["Deaths"][dateIndex],
  };
  const kwazuluNatal = {
    id: 3,
    date: rsaObject["Dates"][dateIndex],
    province: "KZN",
    cases: kznObject["Cases"][dateIndex],
    recoveries: kznObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(kznObject, dateIndex),
    deaths: kznObject["Deaths"][dateIndex],
  };

  const easternCape = {
    id: 4,
    date: rsaObject["Dates"][dateIndex],
    province: "EC",
    cases: ecObject["Cases"][dateIndex],
    recoveries: ecObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(ecObject, dateIndex),
    deaths: ecObject["Deaths"][dateIndex],
  };
  const freeState = {
    id: 5,
    date: rsaObject["Dates"][dateIndex],
    province: "FS",
    cases: fsObject["Cases"][dateIndex],
    recoveries: fsObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(fsObject, dateIndex),
    deaths: fsObject["Deaths"][dateIndex],
  };
  const mpumalanga = {
    id: 6,
    date: rsaObject["Dates"][dateIndex],
    province: "MP",
    cases: mpObject["Cases"][dateIndex],
    recoveries: mpObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(mpObject, dateIndex),
    deaths: mpObject["Deaths"][dateIndex],
  };

  const limpopo = {
    id: 7,
    date: rsaObject["Dates"][dateIndex],
    province: "LP",
    cases: lpObject["Cases"][dateIndex],
    recoveries: lpObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(lpObject, dateIndex),
    deaths: lpObject["Deaths"][dateIndex],
  };

  const northWest = {
    id: 8,
    date: rsaObject["Dates"][dateIndex],
    province: "NW",
    cases: nwObject["Cases"][dateIndex],
    recoveries: nwObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(nwObject, dateIndex),
    deaths: nwObject["Deaths"][dateIndex],
  };
  const northenCape = {
    id: 9,
    date: rsaObject["Dates"][dateIndex],
    province: "NC",
    cases: ncObject["Cases"][dateIndex],
    recoveries: ncObject["Recoveries"][dateIndex],
    activeCases: calculateActiveCases(ncObject, dateIndex),
    deaths: ncObject["Deaths"][dateIndex],
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

export const nationalCasesToday = () => {
  const rsa = data["RSA"];
  const nationalDataObject = rsa["National"];
  const todaysCases = getDataByDate(new Date());

  const numberOfNationalCases = ` ${Object.keys(nationalDataObject)[0]} = ${[
    todaysCases,
  ][0].reduce((total, item) => {
    return total + parseInt(item.cases);
  }, 0)}`;
  return numberOfNationalCases;
};

const calculateActiveCases = (provinceObject, index) => {
  const {
    Cases: cases,
    Recoveries: recoveries,
    Deaths: deaths,
  } = provinceObject;
  
  const activeCasesCount = cases[index] - recoveries[index] - deaths[index];
  return activeCasesCount;
};
