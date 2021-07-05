import {createStore , compose,applyMiddleware, } from "redux"

import thunk from "redux-thunk";
// import { checkForToken } from "../action/authActions";
import { fetchProducts } from "../action/productActions";
import { fetchShops } from "../action/shopActions";
import { checkForToken } from "../action/authActions";
import rootReducer from "./rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchProducts())
store.dispatch(fetchShops())
store.dispatch(checkForToken())

export default store;