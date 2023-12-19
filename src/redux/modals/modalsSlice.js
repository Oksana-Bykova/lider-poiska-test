import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    name: '',
    number: '',
    email: '',
    isOpen: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNumber: (state, action) => {
        state.number = action.payload;
      },
      openPopup(state) {
        state.isOpen = true;
      },
      closePopup(state) {
        state.isOpen = false;
      }
  },
});

export const { setName,  setEmail, setNumber, openPopup, closePopup} = popupSlice.actions;
export default popupSlice.reducer;