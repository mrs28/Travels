import styles from "./CardList.module.css";
import { Typography, CssBaseline } from "@mui/material";
import CardDestinations from '../../../CardDestinations/CardDestinations';
// import "@fontsource/roboto/700.css";

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <CssBaseline/>
      <div className={styles.infoTitle}>
        <div className={styles.infoLeft}>
          <Typography className={styles.h1}  variant="h1">
            Explore Popular Destinations
          </Typography>
        </div>
        <div className={styles.infoRight}>
          <Typography className={styles.h6} variant="h6">
            Enjoy the beauty of the world
          </Typography>
        </div>
      </div>
      
      <CardDestinations/>
    </div>

  );
};

export default CardList;
