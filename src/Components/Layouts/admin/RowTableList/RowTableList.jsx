import styles from "./RowTableList.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RowTableList = ({
  elem,
  setDataToEdit,
  deleteData,
  changeVisibility,
}) => {
  let { id } = elem;

  return (
    <tr>
      <td>
        <div className={styles.div}>{elem.destination}</div>
      </td>
      <td>
        <div className={styles.divItem}>{elem.description}</div>
      </td>
      <td>
        <div className={styles.div}>{elem.price}</div>
      </td>
      <td>
        <div className={styles.divImage}>{elem.image}</div>
      </td>
      <td>
      <div className={styles.divItem}>{elem.status}</div>
      </td>
      <td>
        <button onClick={() => setDataToEdit(elem)} className={styles.button}>
          {" "}
          <BorderColorIcon className={styles.icon} />{" "}
        </button>

        <button className={styles.button}>
          {" "}
          <DeleteOutlineIcon
            onClick={() => deleteData(id)}
            className={styles.icon}
          />{" "}
        </button>

        <button onClick={()=> changeVisibility(elem)} className={styles.button}>
          {elem.status === "INVISIBLE" ? (
            <VisibilityIcon className={styles.icon} />
          ) : (
            <VisibilityOffIcon className={styles.icon} />
          )}
        </button> 
      </td>
    </tr>
  );
};

export default RowTableList;
