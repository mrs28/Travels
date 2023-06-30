import styles from "./ChooseUs.module.css";
import { Typography, CssBaseline } from "@mui/material";
// import Filter1Icon from '@mui/icons-material/Filter1';
// import Filter2Icon from '@mui/icons-material/Filter2';
// import Filter3Icon from '@mui/icons-material/Filter3';

const ChooseUs = () => {
  return (
    <div className={styles.chooseUs}>
      <CssBaseline />
      <div className={styles.infoLeft}>
        <Typography align="center" className={styles.h1} variant="h2">
          Why you should us
        </Typography>
      </div>

      <div className={styles.chooseUsBox}>
        {/* columna izquierda */}
        <div className={styles.chooseUsLeft}>
          <div>Lorem ipsum dolor</div>
          <div>Lorem ipsum dolor perspiciatis provident tenetur?</div>
          <div>Lorem ipsum dolor sit</div>
        </div>
        {/* columna derecha */}
        <div ClassName={styles.chooseUsRight}>
          <div>
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
          </div>

          <div>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
