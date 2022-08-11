// tüm statelerin toplandığı yer.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const RootReducer = combineReducers({
  cart: cartReducer, //,
  //user: userReducer. Ama başka reducerimiz yok şuan
});

export default RootReducer;
