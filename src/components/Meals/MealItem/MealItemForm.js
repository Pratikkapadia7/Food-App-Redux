import { useSelector, useDispatch } from "react-redux";
import styles from "./MealItemForm.module.css";
import { useRef } from "react";
import { cartActions } from "../../../Store/cart-slice";

const MealItemForm = (props)=>{
    const inputRef = useRef();
    const dispatch = useDispatch();
    const cartState = useSelector(state=> state.cart);
    const formSubmitHandler =(event)=>{
        event.preventDefault();

        const cartData ={
            id: props.items.id,
            name: props.items.name,
            price: props.items.price,
            quantity: inputRef.current.value
        }
        dispatch(cartActions.addItemToCart(cartData));

    }


    return(
        <form className = {styles.form} onSubmit={formSubmitHandler} >
            <div className={styles.input}>
                <label>Amount</label>
                <input ref={inputRef} type='number' step='1' min = "1" max = "5" defaultValue='1'/>
            </div>
            <button>+ Add</button>
        </form>
    );
}
export default MealItemForm;