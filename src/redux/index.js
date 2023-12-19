import { configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import popupReducer from '../redux/modals/modalsSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    popup: popupReducer,
  },
});
 
