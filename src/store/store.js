import { createStore, applyMiddleware, compose } from "redux";
import reducers, { initialstate } from "./reducers/defaultReducer";
import thunk from "redux-thunk";

// import cart from "./reducers/cartReducer";

// const persistConfig = {
//   key: "AnybuyCart",
//   storage,
//   whitelist: ["cart", "rechargeCart"],
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export const store = createStore(
  // persistedReducer,
  reducers,
  initialstate,
  composeEnhancer(applyMiddleware(...middleware))
);
