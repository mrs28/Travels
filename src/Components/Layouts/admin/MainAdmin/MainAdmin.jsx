import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import styles from "./MainAdmin.module.css";
import FormList from "../FormList/FormList";
import DestinationList from "../DestinationList/DestinationList";
import { list, add, remove } from "../../../../Services/destinations";

// const initialData = [
//   {
//     id: 1,
//     destination: "El Cairo",
//     description: "A wonderful city to discover Egyptian history and culture.",
//     price: 5000,
//     image: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1679173964/pexels-errin-casano-2356045_1_urjcza.jpg",
//   },
//   {
//     id: 2,
//     destination: "Singapur",
//     description: "fantastic",
//     price: 10000,
//     image: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1679173964/pexels-errin-casano-2356045_1_urjcza.jpg",
//   },
// ];

const MainAdmin = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const getDestinations = async () => {
    const destinations = await list();
    setDb(Object.values(destinations));
  };

  const createData = async (data) => {
    data.id = Date.now();
    await add(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    //por c/el si el id es igual la posición del id, reemplaza la data, sino que quede igual
    const updatedData = db.map((el) => (el.id === data.id ? data : el));
    setDb(updatedData);
  };

  const changeVisibility = async (data) => {
    const newData = {
      ...data,
      status: data.status === "VISIBLE" ? "INVISIBLE" : "VISIBLE",
    };
    await add(newData);
    const updatedData = db.map((el) => {
      if (el.id === newData.id) {
        el = newData;
      }
      return el;
    });

    setDb(updatedData);
  };

  const deleteData = async (id) => {
    await remove(id);
    await getDestinations();
  };

  // const showRow = (data) => {
  //   if(data.id === !0) {
  //     setShow(!show)
  //     console.log("en showRow")
  //   }
  // }
  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <div className={styles.mainAdminContainer}>
      <CssBaseline />

      <div className={styles.mainAdmin}>
        <div className={styles.formListBox}>
          <FormList
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </div>
      </div>
      <DestinationList
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        changeVisibility={changeVisibility}
      />
    </div>
  );
};

export default MainAdmin;
