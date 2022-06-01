import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/defaultReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
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
  composeEnhancer(applyMiddleware(...middleware))
);
