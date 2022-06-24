// export const Increment = (item) => {
//   return {
//     type: "increaseQuantity",
//     payload: item,
//   };
// };

// export const Decrement = (item) => {
//   return (dispatch) => {
//     dispatch({
//       type: "decreaseQuantity",
//       payload: item,
//     });
//   };
// };

// export const AddToCart = (item) => {
//   return {
//     type: "AddToCart",
//     payload: item,
//   };
// };

// export const RemoveFromCart = (itemId) => {
//   return {
//     type: "RemoveFromCart",
//     payload: itemId,
//   };
// };

import Cookies from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
export const addToFav =
  (id, name, photo, price, quantity) => async (dispatch, getState) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: id,
        name: name,
        photo: photo,
        price: price,
        quantity: quantity,
      },
    });
    Cookies.set("favourites", JSON.stringify(getState().favLists.favItems));
  };
export const removeFromFavorites = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  Cookies.set("favourites", JSON.stringify(getState().favLists.favItems));
};
