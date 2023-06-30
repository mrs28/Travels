import styles from './PageHome.module.css';
import CardList from '../../Components/Layouts/public/CardList/CardList';
import CardInfo from '../../Components/Layouts/public/CardInfo/CardInfo';
import TravelAround from '../../Components/Layouts/public/TravelAround/TravelAround';


const PageHome = () => {
  return (
    <div className={styles.home}>
      <TravelAround/>
      <CardList/>
      <CardInfo/>
    </div>
  )
}

export default PageHome