import styles from "./Input.module.css";
const Input = (props)=>{
    
    return(
        <div className={styles.input}>
            <label htmlFor = {props.input.id}>{props.label}</label>
            <input id ={props.input.id} {...props.input} step='1' min = "1" max = "5"/>
        </div>
    );
}   
export default Input;