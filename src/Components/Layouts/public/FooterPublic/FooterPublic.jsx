import styles from "./FooterPublic.module.css";
import { Typography, CssBaseline } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Logo from "../../../../Components/Logo/Logo";

const FooterPublic = () => {
  return (
    <div className={styles.footer}>
      <CssBaseline />

      {/* 3 columnas */}

      <div className={styles.footerTop}>
        {/* Columna 1 */}
        <div className={styles.logo}>
          <Logo
            title={
              <Typography className={styles.h1} component="h1" variant="h5">
                <TravelExploreIcon className={styles.icon} fontSize="small" />

                {"Travels"}
              </Typography>
            }
          />
          <Typography className={styles.column} variant="body1">
            Explore the world with us!
          </Typography>
        </div>

        <div className={styles.footerColumn}>
          {/* Columna 2 */}
          <div>
            <Typography className={styles.column} variant="body1">
              About us
            </Typography>
            <Typography mt={2} className={styles.column} variant="body1">
              Personal Trip
            </Typography>
            <Typography mt={2} className={styles.column} variant="body1">
              Group Trip
            </Typography>
          </div>

          {/* Columna 3 */}
          <div>
            <Typography variant="body1">+51 920058674</Typography>
            <Typography
              mt={2}
              fontWeigth="light"
              className={styles.column}
              variant="body1"
            >
              info@travels.com
            </Typography>
            <Typography mt={2} className={styles.column} variant="body1">
              support@travels.com
            </Typography>
            {/* <Typography mt={2} className={styles.column} variant="body1">
         Terms & Conditions
        </Typography> */}
          </div>
        </div>

        {/* Columna 4 */}
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaItems}>
            <InstagramIcon className={styles.icon} fontSize="large" />
            <FacebookIcon className={styles.icon} fontSize="large" />
            <YouTubeIcon className={styles.icon} fontSize="large" />
          </div>
        </div>
      </div>

      <div className={styles.love}>
        <Typography variant="body1"> Made with love </Typography>
        <FavoriteIcon className={styles.loveIcon} />
        <Typography variant="body1"> to CodiGO by Tecsup </Typography>
      </div>
      {/* *** Footer Copyrigth *** */}
      <div className={styles.copyRight}>
        <Logo
          title={
            <Typography variant="body2">
              <TravelExploreIcon className={styles.icon} fontSize="small" />

              {"Travels © Copyright 2023 All rights reserved."}
            </Typography>
          }
        />
      </div>
    </div>
  );
};

export default FooterPublic;
