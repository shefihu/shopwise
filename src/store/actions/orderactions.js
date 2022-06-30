import Cookies from "js-cookie";
import { ADD_TOTAL_ITEMS } from "../constants/orderconstants";
// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
export const addToOrder =
  (id, name, photo, price, quantity, TotalItems, TotalPrice) =>
  async (dispatch, getState) => {
    dispatch({
      type: ADD_TOTAL_ITEMS,
      payload: {
        id: id,
        name: name,
        photo: photo,
        price: price,
        quantity: quantity,
        TotalItems: TotalItems,
        TotalPrice: TotalPrice,
      },
    });
    Cookies.set("orders", JSON.stringify(getState().orders.orderItems));
  };
