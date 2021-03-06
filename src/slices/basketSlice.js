import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      let newItems = [...state.items]

      const index = state.items.findIndex((basketItem)=> basketItem.id === action.payload.id)

      if(index>=0){
         newItems.splice(index, 1)
      }
     
      else{
        console.warn('error')
      }

      state.items = newItems
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) =>total + item.price, 0)

export default basketSlice.reducer;
