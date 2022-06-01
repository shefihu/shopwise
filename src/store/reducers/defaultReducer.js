import { combineReducers } from "redux";

import Auth from "./authReducers";

const reducers = combineReducers({
  auth: Auth,
});

export default reducers;
