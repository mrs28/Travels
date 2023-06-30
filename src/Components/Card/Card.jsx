import styles from "./Card.module.css";

const Card = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <span className={styles.iconCard}> {icon} </span>
      <h4 className={styles.titleCard}> {title}</h4>
      <p className={styles.textCard}> {text} </p>
    </div>
  );
};

export default Card;
