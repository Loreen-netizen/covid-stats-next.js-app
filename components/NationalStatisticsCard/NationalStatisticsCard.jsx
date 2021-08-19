import { Grow } from "@material-ui/core";
import styles from "../../styles/NationalStatisticsCard.module.css";
import { nationalCasesToday } from "../../services/covidService";

export const NationalStatisticsCard = () => {
  const nationalCasesCount = nationalCasesToday();

  return (
    <div>
      <div className={styles.grid}>
        <Grow in timeout={1000}>
          <div className={styles.card}>
            <h4 className={styles.cardh4}>National Covid Statistics Today </h4>
            <p className={styles.cardP}>{nationalCasesCount}</p>
          </div>
        </Grow>
      </div>
    </div>
  );
};

export default NationalStatisticsCard;
