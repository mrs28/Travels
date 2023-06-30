// import { useState } from "react";
import styles from "./DestinationList.module.css";
import RowTableList from "../RowTableList/RowTableList";

const DestinationList = ({
  data,
  setDataToEdit,
  changeVisibility,
  deleteData,
}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headTable}>
            <th>Destination</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((elem) => (
            <RowTableList
              key={elem.id}
              elem={elem}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              changeVisibility={changeVisibility}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DestinationList;
