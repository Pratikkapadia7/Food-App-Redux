import { configureStore } from "@reduxjs/toolkit";
import availableMealsSlice from "./AvailableMeals-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer:{
        availableMeals: availableMealsSlice.reducer,
        cart: cartSlice.reducer
    }
});
export default store;