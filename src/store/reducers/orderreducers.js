import { ADD_TOTAL_ITEMS } from "../constants/orderconstants";

export const orderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case ADD_TOTAL_ITEMS: {
      const item = action.payload;
      const existItem = state.orderItems.find((x) => x.id === item.id);
  
      if (existItem) {
        let newState = {
          ...state,
          orderItems: state.orderItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
        return newState;
      } else {
        let newState = {
          ...state,
          orderItems: [...state.orderItems, item],
        };
        return newState;
      }
    }

    default:
      return state;
  }
};
