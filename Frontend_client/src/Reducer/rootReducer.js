import {combineReducers} from "redux";
import {addToCartReducer, updateCartReducer,getCartReducer,removeCartReducer} from "./cartReducer/cartreducer.js";
import {LoginReducer,LogoutReducer,RegisterReducer,getUserReducer} from "./authReducer/authreducer";
import {productReducer,productDetailReducer} from "./productReducer/productreducer";
import { myOrderReducer,getMyOrderReducer } from "./orderReducer/myOrderReducer.js";
import {AUserGetReducer} from "./userReducer/AUserReducer";

const rootReducer = combineReducers({AUserGetReducer,getMyOrderReducer,myOrderReducer,removeCartReducer,updateCartReducer,getCartReducer,addToCartReducer,LoginReducer,LogoutReducer,RegisterReducer,getUserReducer,productReducer,productDetailReducer});


export default rootReducer;