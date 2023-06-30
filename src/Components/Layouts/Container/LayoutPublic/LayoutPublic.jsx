import Banner from '../../Container/../public/Banner/Banner';
import FooterPublic from '../../public/FooterPublic/FooterPublic';
import styles from './LayoutPublic.module.css';

const LayoutPublic = (props) => {
    const { children } = props;
  return (
    <div className={styles.public}>
        <Banner/>
        {children}
        <FooterPublic/>
    </div>
  )
}

export default LayoutPublic