// import { UpdateCart } from "../../Config/firebase";
// import { useSelector } from "react-redux";

// import { useSelector } from "react-redux";
// import { UpdateCart } from "../../firebase/config";
import { useSelector } from "react-redux";
import { UpdateCart } from "../../firebase/config";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// const initiaState = {
//   cart: [],
//   totalCartQuantity: 0,
//   totalCartPrice: 0,
// };

// const cart = (state = initiaState, action) => {
//   const getID = state.cart.find((item) => item.id === action.payload.id);
//   const getIndex = state.cart.findIndex(
//     (item) => item.id === action.payload.id
//   );
//   const getItem = state.cart.find((item) => item === getID);
//   let newArray = [...state.cart];

//   const UploadCart = (newState) => {
//     const Authed = useSelector((state) => state.auth);
//     // let AuthState = useSelector((state) => state.auth);
//     UpdateCart(newState, Authed.currentUser.currentUser.uid);
//   };

//   switch (action.type) {
//     case "AddToCart":
//       if (getID === undefined) {
//         let newState = {
//           ...state,
//           cart: state.cart.concat(action.payload),
//           totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
//           totalCartPrice: state.totalCartPrice + action.payload.totalItemPrice,
//         };
//         return newState;
//       } else {
//         let newArray = [...state.cart];
//         newArray[getIndex].quantity = getItem.quantity + 1;
//         newArray[getIndex].totalItemPrice =
//           Number(action.payload.sellingPrice) + getItem.totalItemPrice;
//         let newState = {
//           ...state,
//           cart: newArray,
//           totalCartQuantity: state.totalCartQuantity + action.payload.quantity,
//           totalCartPrice: state.totalCartPrice + action.payload.totalItemPrice,
//         };
//         return newState;
//       }

//     case "RemoveFromCart":
//       let newTotalCartPrice = state.totalCartPrice - getItem.totalItemPrice;
//       let newTotalCartQuantity = state.totalCartQuantity - getItem.quantity;
//       let updatedState = state.cart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       let newRemoveState = {
//         ...state,
//         totalCartPrice: newTotalCartPrice,
//         totalCartQuantity: newTotalCartQuantity,
//         cart: updatedState,
//       };

//       return newRemoveState;

//     case "increaseQuantity":
//       newArray[getIndex].quantity = getItem.quantity + 1;
//       newArray[getIndex].totalItemPrice =
//         getItem.totalItemPrice + Number(action.payload.sellingPrice);

//       let newState = {
//         ...state,
//         cart: newArray,
//         totalCartQuantity: state.totalCartQuantity + 1,
//         totalCartPrice:
//           state.totalCartPrice + Number(action.payload.sellingPrice),
//       };
//       return newState;

//     case "decreaseQuantity":
//       newArray[getIndex].quantity = getItem.quantity - 1;
//       newArray[getIndex].totalItemPrice =
//         getItem.totalItemPrice - Number(action.payload.sellingPrice);

//       return {
//         ...state,
//         cart: newArray,
//         totalCartQuantity: state.totalCartQuantity - 1,
//         totalCartPrice:
//           state.totalCartPrice - Number(action.payload.sellingPrice),
//       };

//     default:
//       return state;
//   }
// };

// export default cart;

export const favouriteReducer = (state = { favItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.favItems.find((x) => x.id === item.id);
      const UploadCart = (newState) => {
        const Authed = useSelector((state) => state.auth);
        // let AuthState = useSelector((state) => state.auth);
        UpdateCart(newState, Authed.currentUser.currentUser.uid);
      };
      if (existItem) {
        let newState = {
          ...state,
          favItems: state.favItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
        return newState;
      } else {
        let newState = {
          ...state,
          favItems: [...state.favItems, item],
        };
        return newState;
      }
    }
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        favItems: state.favItems.filter((x) => x.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
