import Cookies from "js-cookie";
import { combineReducers } from "redux";

import Auth from "./authReducers";
import { favouriteReducer } from "./cartReducers";
import { orderReducer } from "./orderreducers";
export const initialstate = {
  favLists: {
    favItems: Cookies.get("favourites")
      ? JSON.parse(Cookies.get("favourites"))
      : [],
  },
  orders: {
    orderItems: Cookies.get("orders") ? JSON.parse(Cookies.get("orders")) : [],
  },
};
const reducers = combineReducers({
  auth: Auth,
  favLists: favouriteReducer,
  orders: orderReducer,
  // cart: cart,
});

export default reducers;
