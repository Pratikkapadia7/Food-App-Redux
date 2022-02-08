import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useSelector } from 'react-redux';

const AvailableMeals = () =>{
    const availableMeals = useSelector(state=> state.availableMeals.items);  
    const mealsData = availableMeals.map((meal) => 
        <MealItem 
          key={meal.id} 
          name={meal.name} 
          description={meal.description} 
          price={meal.price} 
          id={meal.id} 
          amount={meal.amount}
        />
    );
    return(
        <section className={styles.meals}>
            <Card>
                <ul>
                   {mealsData}
                </ul>
            </Card>
            
        </section>
    )
}
export default AvailableMeals;