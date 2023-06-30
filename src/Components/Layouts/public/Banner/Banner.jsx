import styles from "./Banner.module.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Typography, CssBaseline } from "@mui/material";
import "@fontsource/roboto/700.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login")
  }

  return (
    <div className={styles.banner}>
      <CssBaseline />

      <div className={styles.logo}>
        <Typography className={styles.h1} component="h1" variant="h4">
          <TravelExploreIcon className={styles.icon} fontSize="large" />
          Travels
        </Typography>
      </div>

      {/* <button onClick={handleClick} className={styles.sigIn}> */}
        <AccountCircleIcon onClick={handleClick} className={styles.sigIn} fontSize="large"
         />
      {/* </button> */}

      <img
        className={styles.imgBanner}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1679173964/pexels-errin-casano-2356045_1_urjcza.jpg"
        alt="Machu Picchu"
      />
      {/* banner mobile */}
      <img
        className={styles.imgBannerMobile}
        src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1684939947/vista_cope_town_pdp762.png"
        alt="Sudafrica"
      />

      <div className={styles.boxMessageBanner}></div>
      <div className={styles.messageBanner}>
        <Typography className={styles.h2} component="h2" variant="h2">
          New destinations are waiting for you
        </Typography>
      </div>

      {/* banner mobile */}
      <div className={styles.boxMessageBanner}></div>
      <div className={styles.messageBannerMobile}>
        <Typography
          className={styles.h2}
          fontWeight="light"
          component="h3"
          variant="h4"
        >
          Travel, live, enjoy!
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
