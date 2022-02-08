import { createSlice } from '@reduxjs/toolkit';

const availableMealsSlice = createSlice({
    name: 'available meals',
    initialState: {
        items: [
            {
                id: 'm1',
                name: 'Sushi',
                description: 'Finest fish and veggies',
                price: 22.99,
                amount: 1
              },
              {
                id: 'm2',
                name: 'Schnitzel',
                description: 'A german specialty!',
                price: 16.5,
                amount: 1
              },
              {
                id: 'm3',
                name: 'Barbecue Burger',
                description: 'American, raw, meaty',
                price: 12.99,
                amount: 1
              },
              {
                id: 'm4',
                name: 'Green Bowl',
                description: 'Healthy...and green...',
                price: 18.99,
                amount: 1
              }
        ]
    },
    reducers: {
        getCartData(state){
            return state;
        }
    }
});
export const availableMealsActions = availableMealsSlice.actions;
export default availableMealsSlice;