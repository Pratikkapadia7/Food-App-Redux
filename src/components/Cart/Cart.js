import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useSelector, useDispatch  } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import Checkout from './Checkout';
import { useState } from 'react';
const Cart = ()=>{
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartData = useSelector(state=> state.cart.items);
    const cartAmount = useSelector(state => state.cart.totalAmount);
    const orderConfirm = useSelector(state => state.cart.orderConfirm);
    const dispatch = useDispatch();
    const closeCartHandler = ()=>{
        dispatch(cartActions.closeCart());
        dispatch(cartActions.emptyCart());
    }
    const orderConfirmHandler =()=>{
        dispatch(cartActions.orderConfirmHandler());
    }
    const cartItems = <ul className={styles['cart-items']} >{cartData.length>0 &&
        cartData.map((item) => {
            return (item.quantity>0 && <CartItem 
            key={item.id} 
            id={item.id}
            name={item.name} 
            amount={item.quantity} 
            price={item.price}
            />)})
    }</ul>;

    const submitHandler =async (userData) =>{
        setIsSubmitting(true);
        await fetch('https://movies-https-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',{
            method:'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartData
            })
        });
        
        setIsSubmitting(false);
        setDidSubmit(true);
        
    }
    const isSubmittingModal = <p>Sending order data...</p>
    const didSubmitModal =<>
        <p>Your order is confirmed and Started cooking!!!</p>
        <div className={styles.actions}>
            <button className={styles.button} onClick={closeCartHandler} >Close</button>
        </div>
        
    </>
    const cartModalContent =<>
        {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$ {cartAmount.toFixed(2)} </span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={closeCartHandler}>Close</button>
                {cartData.length>0 && <button className={styles.button} onClick={orderConfirmHandler}>Order</button>}
            </div>
            {orderConfirm && <Checkout onConfirm={submitHandler} />}
    </>

    

    return(
        <Modal >
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && !didSubmit && isSubmittingModal}
            {!isSubmitting && didSubmit && didSubmitModal}
        </Modal>
    );
}
export default Cart;