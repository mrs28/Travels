import styles from "./Logo.module.css";

const Logo = ({ title }) => {
  return (
    <div className={styles.logo}>
      <span> {title} </span>
    </div>
  );
};

export default Logo;
