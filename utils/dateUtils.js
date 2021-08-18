import moment from "moment";

export const getDayMonthFromUnixTimestamp = (timestamp) => {
  return moment.unix(timestamp / 1000).format("D MMM");
};
