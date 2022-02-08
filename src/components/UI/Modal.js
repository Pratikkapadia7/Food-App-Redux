import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
const Backdrop = (props)=>{
    const dispatch= useDispatch();
    const closeCartHandler = ()=>{
        dispatch(cartActions.closeCart());
    }
    return <div className={styles.backdrop} onClick={closeCartHandler}></div>;
}
const ModalOverlay = (props)=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>  
    );
}
const Modal = (props)=>{
   return(
       <>
           {ReactDOM.createPortal(<Backdrop/>,document.getElementById('overlays'))}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
       </>
   ); 
}
export default Modal;