import styles from "./TravelAround.module.css";
import { Typography, CssBaseline } from "@mui/material";
// import '@fontsource/roboto/300.css';
import "@fontsource/roboto/500.css";

const TravelAround = () => {
  return (
    <div className={styles.travelAround}>
      <CssBaseline />
      <div className={styles.travelAroundTitle}>
        {/* <Typography  className={styles.h1} variant="h1"> */}
        <h1 className={styles.h1}>Travel Around The World</h1>

        <h1 className={styles.h1ResponsiveMobile}> Don't wait any longer!</h1>
        <div className={styles.travelAroundTitleBottom}>
          <Typography align="justify" className={styles.body1} variant="body1">
            Discover the world like never before with Travels. Be your guide to
            limitless exploration where breathtaking landscapes and captivating
            experiences await at every turn and connect with diverse cultures,
            and create unforgettable memories.
          </Typography>
        </div>
      </div>

      <div className={styles.travelAroundBox}>
        {/* columna izquierda */}
        <div className={styles.travelAroundLeft}>
          <figure className={styles.travelAroundFigure}>
            <img
              className={styles.travelAroundImg}
              width={750}
              src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1685151755/huaraz_ni0jnj.jpg"
              alt="laguna"
            />
          </figure>
        </div>

        {/* columna derecha */}
        <div className={styles.travelAroundRight}>
          <div className={styles.travelAroundRightBox}>
            <span className={styles.travelAroundRightBoxSpan}>
              <img
                className={styles.travelAroundRightBoxImg}
                width={60}
                height
                src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1685149639/trekking_mkou08.png"
                alt="trekking"
              />
            </span>
            <div className={styles.travelAroundRightBoxItem}>
              <Typography
                align="justify"
                className={styles.body1}
                variant="body1"
              >
                Trekking
              </Typography>
              <Typography align="left" className={styles.body1} variant="body2">
                Climbing the tallest mountains in Europe
              </Typography>
            </div>
          </div>

          <div className={styles.travelAroundRightBox}>
            <span className={styles.travelAroundRightBoxSpan}>
              <img
                className={styles.travelAroundRightBoxImg}
                width={60}
                src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1685147688/rafting_d6vjn8.png"
                alt="rafting"
              />
            </span>
            <div className={styles.travelAroundRightBoxItem}>
              <Typography
                align="justify"
                className={styles.body1}
                variant="body1"
              >
                Rafting
              </Typography>
              <Typography align="left" className={styles.body1} variant="body2">
                Embrace the thrill and the power of nature!
              </Typography>
            </div>
          </div>

          <div className={styles.travelAroundRightBox}>
            <span className={styles.travelAroundRightBoxSpan}>
              <img
                className={styles.travelAroundRightBoxImg}
                width={60}
                src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1685150063/windsurfing_v1y9j2.png"
                alt="windsurfing"
              />
            </span>
            <div className={styles.travelAroundRightBoxItem}>
              <Typography
                align="justify"
                className={styles.body1}
                variant="body1"
              >
                Windsurfing
              </Typography>
              <Typography align="left" className={styles.body1} variant="body2">
                Feel the adrenaline rush in open waters
              </Typography>
            </div>
          </div>

          <div className={styles.travelAroundRightBox}>
            <span className={styles.travelAroundRightBoxSpan}>
              <img
                className={styles.travelAroundRightBoxImg}
                width={60}
                src="https://res.cloudinary.com/dzjf00pvx/image/upload/v1685150765/paragliding_hwnu6h.png"
                alt="paragliding"
              />
            </span>
            <div className={styles.travelAroundRightBoxItem}>
              <Typography
                align="justify"
                className={styles.body1}
                variant="body1"
              >
                Paragliding
              </Typography>
              <Typography align="left" className={styles.body1} variant="body2">
                Let your adventurous spirit take flight!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAround;
