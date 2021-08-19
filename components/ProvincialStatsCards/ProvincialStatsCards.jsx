import styles from "../../styles/ProvincialStatsCards.module.css";
import { nationalCasesToday } from "../../services/covidService";


export const ProvincialStatsCards = () => {
 const nationalCasesCount = nationalCasesToday()

 
  return (
    <div>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>National Covid Statistics Today </h2>
          <h1>
           {nationalCasesCount}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default ProvincialStatsCards;
