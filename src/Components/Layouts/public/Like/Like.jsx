import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./Like.module.css";

const Like = () => {
  // const [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const increaseLike = () => {
    // setCount(count + 1);

    setIsLike(!isLike); //true
  };

  useEffect(() => {}, []);

  return (
    <button className={styles.likeButton} onClick={increaseLike}>
      {isLike ? (
        <FavoriteIcon className={styles.icon} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </button>
  );
};

export default Like;
