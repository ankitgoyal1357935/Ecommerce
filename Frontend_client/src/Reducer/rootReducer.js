import {combineReducers} from "redux";
import {addToCartReducer, updateCartReducer,getCartReducer} from "./cartReducer/cartreducer.js";
import changeAuth from "./authReducer/authreducer";
import {productReducer,productDetailReducer} from "./productReducer/productreducer";

const rootReducer = combineReducers({updateCartReducer,getCartReducer,addToCartReducer,changeAuth,productReducer,productDetailReducer});


export default rootReducer;