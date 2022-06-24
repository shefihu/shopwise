import Cookies from "js-cookie";
import { combineReducers } from "redux";

import Auth from "./authReducers";
import cart from "./cartReducers";
import { favouriteReducer } from "./cartReducers";
export const initialstate = {
  favLists: {
    favItems: Cookies.get("favourites")
      ? JSON.parse(Cookies.get("favourites"))
      : [],
  },
};
const reducers = combineReducers({
  auth: Auth,
  favLists: favouriteReducer,
  // cart: cart,
});

export default reducers;
