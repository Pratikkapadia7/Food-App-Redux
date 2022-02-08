import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealImage from '../../assets/meals.jpg';
const Header = ()=>{
    return (
    <>
        <header className={styles.header}>
            <h1>React Food</h1>
            <HeaderCartButton />
        </header>
        <div className={styles['main-image']}>
            <img src={mealImage} alt='A table full of delicious food'/>
        </div>
    </>
        
    )
}
export default Header;