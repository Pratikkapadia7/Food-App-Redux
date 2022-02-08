import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
const HeaderCartButton = ()=>{
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart);
    const openCartHandler = ()=>{
        dispatch(cartActions.openCart());
    }
    return(
        <button className={styles.button} onClick={openCartHandler}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className = {styles.badge}>{cartState.totalQuantity}</span>
        </button>
    );
};
export default HeaderCartButton;