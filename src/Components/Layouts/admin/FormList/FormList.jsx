import { useState, useEffect } from "react";
import styles from "./FormList.module.css";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const FormList = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [destinationData, setDestinationData] = useState({
    destination: "",
    description: "",
    price: "",
    image: "",
    status:"VISIBLE",
    id: null,
  });

  useEffect(() => {
    if (dataToEdit) {
      setDestinationData(dataToEdit); //setDestinationData función actualizadora
    } else {
      setDestinationData({
        destination: "",
        description: "",
        price: "",
        image: "",
        status:"VISIBLE",
        id: null,
      });
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setDestinationData({
      ...destinationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destinationData.id) {
      createData(destinationData);
    } else {
      updateData(destinationData);
    }
  };

  const handleReset = () => {
    //resetea cada uno de los valores
    setDestinationData({
      destination: "",
      description: "",
      price: "",
      image: "",
      status: "VISIBLE",
      id: null,
    });
    //limpoar el formulario
    setDataToEdit(null);
  };

  return (
    <div className={styles.formList}>
      <form onSubmit={handleSubmit} className={styles.formList}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Destination"
            required
            name="destination"
            onChange={handleChange}
            value={destinationData.destination}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Description"
            required
            name="description"
            onChange={handleChange}
            value={destinationData.description}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Price"
            required
            name="price"
            onChange={handleChange}
            value={destinationData.price}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Image"
            required
            name="image"
            onChange={handleChange}
            value={destinationData.image}
          />
        </div>

        <div className={styles.buttonBox}>
          <button type="submit" className={styles.button}>
            <PostAddIcon className={styles.icon} fontSize="large" />
          </button>

          <button onClick={handleReset} className={styles.button}>
            <CleaningServicesIcon className={styles.icon} fontSize="large" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormList;
