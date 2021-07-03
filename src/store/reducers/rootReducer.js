import productReducer from "./productReducer";
import { combineReducers } from "redux";
import shopReducer from "./shopReducer";


const rootReducer = combineReducers({
  products: productReducer,
  shops : shopReducer
})

export default rootReducer;