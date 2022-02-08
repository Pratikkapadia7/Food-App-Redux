import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
const CartItem = (props) => {
    const dispatch = useDispatch();
    const addItemHandler =(event)=>{
        dispatch(cartActions.addItemFromCart(event.target.value));
    }
    const removeItemHandler =(event)=>{
        dispatch(cartActions.removeItemFromCart(event.target.value));
    }
    const price = `$${props.price.toFixed(2)}`;
    return (
      <li className={classes['cart-item']}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
            <button onClick={removeItemHandler} value={props.id}>−</button>
            <button onClick={addItemHandler} value={props.id}>+</button>
        </div>
      </li>
    );
  
  
};

export default CartItem;
