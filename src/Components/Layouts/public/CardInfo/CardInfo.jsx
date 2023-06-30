import styles from "./CardInfo.module.css";
import { Typography, CssBaseline } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MapIcon from "@mui/icons-material/Map";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Card from "../../../Card/Card";
import "@fontsource/roboto/700.css";

const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <CssBaseline />

      {/* banner */}
      <div className={styles.infoTitle}>
        <div className={styles.infoLeft}>
          <Typography className={styles.h4} variant="h4">
            We Are The Best Travel Agent
          </Typography>
        </div>
        <div className={styles.infoRight}>
          <Typography className={styles.h6} variant="h6">
            Travel around the world to enjoy and see the beauty of nature safety
            with us.
          </Typography>
        </div>
      </div>

      {/* **** Top Values **** */}
      <div className={styles.cardsbox}>
        <div className={styles.cardstitle}>
          <Typography
            className={styles.cardTitleInfo}
            component="h2"
            variant="h2"
          >
            Top Values For You
          </Typography>
          <Typography mt={3} variant="h5">
            We have a variety of benefits for you
          </Typography>
        </div>

        {/* 3 cards */}
        <div className={styles.cardsContainer}>
          <Card
            title={
              <Typography className={styles.cardTitleInfo} variant="h6">
                Plan a Trip
              </Typography>
            }
            icon={<EventNoteIcon className={styles.icon} fontSize="large" />}
            // icon2={<AirplanemodeActiveIcon className={styles.icon2}  fontSize="large" />}
            text={
              "We'll ensure your trip is perfectly tailored to your preferences and interests."
            }
          />
          <Card
            title={
              <Typography className={styles.cardTitleInfo} variant="h6">
                Explore and Save
              </Typography>
            }
            icon={<MapIcon className={styles.icon} fontSize="large" />}
            text={
              "Explore the stunning beaches of Bali or embark on an exhilarating safari in the Serengeti"
            }
          />
          <Card
            title={
              <Typography className={styles.cardTitleInfo} variant="h6">
                Enjoy your Trip
              </Typography>
            }
            icon={<BeachAccessIcon className={styles.icon} fontSize="large" />}
            text={
              "An amazing time exploring unforgettable experiences. Enjoy every moment!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
