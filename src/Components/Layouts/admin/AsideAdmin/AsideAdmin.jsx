import styles from "./AsideAdmin.module.css";
import { Typography, CssBaseline } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Logo/Logo";

const AsideAdmin = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }
  return (
    <div className={styles.asideMainAdmin}>
      <CssBaseline />
      <Link to="/">
        <div className={styles.title}>
          <Logo
          title={
          <Typography className={styles.h1} component="h1" variant="h5">
            <TravelExploreIcon className={styles.icon} fontSize="extra-large" />
            {"Travels"}
          </Typography>
          }
          />
        </div>
      </Link>

      <aside className={styles.asideElements}>
        <div>
          <span onClick={handleClick} className={styles.span}>
            <LogoutIcon className={styles.icon} fontSize="large" />
          </span>
        </div>
      </aside>
    </div>
  );
};

export default AsideAdmin;
