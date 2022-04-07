import {combineReducers} from "redux";
import addToCartReducer from "./cartReducer/cartreducer.js";
import getCartReducer from "./cartReducer/getCartReducer.js";
import changeAuth from "./authReducer/authreducer";
import {productReducer,productDetailReducer} from "./productReducer/productreducer";

const rootReducer = combineReducers({getCartReducer,addToCartReducer,changeAuth,productReducer,productDetailReducer});


export default rootReducer;