import styles from "../../styles/ProvincialStatsCards.module.css";
import { getDataByDate } from "../../services/covidService";
import data from "../../data/covidData";

export const ProvincialStatsCards = () => {
  const rsa = data["RSA"];
  const nationalData = rsa["National"];
  console.log(nationalData, "dddddddddddddddddddd");
  const todaysCases = getDataByDate(new Date());
  console.log(todaysCases,"llllllllll")
  return (
    <div>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>National Covid Statistics Today </h2>
          <h1>
            {Object.keys(nationalData)[0]} = {[todaysCases][0].reduce((total, item)=>{

                return total + parseInt(item.cases)
            },0)}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default ProvincialStatsCards;
