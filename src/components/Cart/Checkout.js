import React,{ useState, useRef } from 'react';
import styles from './Checkout.module.css';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../Store/cart-slice';

const Checkout = (props)=>{
    const dispatch = useDispatch();
    //Refs initialization
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    //States Initialization
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const cancelOrderHandler =()=>{
        dispatch(cartActions.cancelOrderHandler());
    }

    const isEmpty =(item)=> item.trim()==='';
    const isFiveChars = (item)=> item.trim().length === 5;
    
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalCodeIsValid = isFiveChars(enteredPostalCode);
        const cityIsValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValid,
            postalCode: postalCodeIsValid
        })
        const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;
        if(!formIsValid){
            return;
        }else{
            props.onConfirm({
                name: enteredName,
                street: enteredStreet,
                postalCode: enteredPostalCode,
                city: enteredCity
            });
        }
    }
    const nameControlClasses = `${styles.control} ${formInputValidity.name ? '' : styles.invalid}`;
    const streetControlClasses = `${styles.control} ${formInputValidity.street ? '' : styles.invalid}`;
    const postalCodeControlClasses = `${styles.control} ${formInputValidity.postalCode ? '' : styles.invalid}`;
    const cityControlClasses = `${styles.control} ${formInputValidity.city ? '' : styles.invalid}`;
    
    
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your name</label>
                <input type='text' id="name" ref={nameInputRef}/>
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type='text' id="street" ref={streetInputRef}/>
                {!formInputValidity.street && <p>Please enter the street name!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postalCode">Postal Code</label>
                <input type='text' id="postalCode" ref={postalCodeInputRef}/>
                {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type='text' id="city" ref={cityInputRef}/>
                {!formInputValidity.city && <p>Please enter the city name!</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={cancelOrderHandler}>Cancel</button>
                <button className={styles.submit}>Confirm</button>
            </div>
            
        </form>
    );
}
export default Checkout;