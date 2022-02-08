import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState: {
        items:[],
        totalQuantity: 0,
        cartIsShown: false,
        totalAmount: 0,
        orderConfirm: false
    },
    reducers:{
        addItemToCart(state, actions){
            const newItem = actions.payload;
            state.totalQuantity=0;
            state.totalAmount = 0;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push(newItem);
            }else{
                existingItem.quantity = newItem.quantity;
            }
            state.items.forEach(item => {
                state.totalQuantity = state.totalQuantity + parseInt(item.quantity);
                state.totalAmount = (state.totalAmount + item.price*(parseInt(item.quantity)));
            });
        },
        openCart(state){
            state.cartIsShown= true;
            state.orderConfirm= false;
        },
        closeCart(state){
            state.cartIsShown= false;
            state.orderConfirm= false;
        },
        addItemFromCart(state, actions){
            const newItemId = actions.payload;
            const existingItem = state.items.find(item => item.id === newItemId);
            if(existingItem.quantity<5){
                existingItem.quantity++;
                state.totalQuantity++;
                state.totalAmount = state.totalAmount + existingItem.price;
            }  
        },
        removeItemFromCart(state,actions){
            const newItemId = actions.payload;
            const existingItem = state.items.find(item => item.id === newItemId);
            if(existingItem.quantity>0){
                if(existingItem.quantity===1){
                    state.items = state.items.filter(item => item.id !== newItemId);
                    state.totalQuantity--;
                    state.totalAmount = state.totalAmount - existingItem.price;
                }else {
                    existingItem.quantity--;
                state.totalQuantity--;
                state.totalAmount = state.totalAmount - existingItem.price;
                }
                
            }
            
            if(state.totalAmount<0){
                state.totalAmount=0;
            }
        },
        orderConfirmHandler(state){
            state.orderConfirm= true;
        },
        cancelOrderHandler(state){
            state.orderConfirm= false;
        },
        emptyCart(state){
            state.items = [];
            state.totalQuantity= 0;
            state.cartIsShown= false;
            state.totalAmount= 0;
            state.orderConfirm= false;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;