import styles from './LayoutAdmin.module.css';
import AsideAdmin from "../../admin/AsideAdmin/AsideAdmin";
// import MainAdmin from "../../admin/MainAdmin/MainAdmin";
import { CssBaseline } from "@mui/material";

const LayoutAdmin = ( props ) => {
  const { children } = props;
  return (
    <div className={styles.layoutAdmin}>
    <CssBaseline />
        <div className={styles.aside}>
            <AsideAdmin/>
        </div>
        <div className={styles.main}>
            {/* <MainAdmin/> */}
            {children}
           
        </div>

       
    </div>
  )
}

export default LayoutAdmin