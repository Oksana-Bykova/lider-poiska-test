import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },

    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    }, 

    upCountCard: (state, action) => {
        state.itemsInCart = state.itemsInCart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              count: ++item.count,
            };
          }
          return item;
        });
      },

      downCountCard: (state, action) => {
        state.itemsInCart = state.itemsInCart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              count: item.count-1,
            };
          }
          return item;
        });
      },

  },
});

export const { setItemInCart, deleteItemFromCart, upCountCard , downCountCard} =
  cartSlice.actions;
export default cartSlice.reducer;
