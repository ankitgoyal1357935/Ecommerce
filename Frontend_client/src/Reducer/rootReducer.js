import {combineReducers} from "redux";
import {addToCartReducer, updateCartReducer,getCartReducer,removeCartReducer} from "./cartReducer/cartreducer.js";
import {LoginReducer,LogoutReducer,RegisterReducer,getUserReducer} from "./authReducer/authreducer";
import {productReducer,productDetailReducer} from "./productReducer/productreducer";
import { myOrderReducer,getMyOrderReducer } from "./orderReducer/myOrderReducer.js";
import {AUserGetReducer,AUserGetByIdReducer, AUserUpdateReducer} from "./userReducer/AUserReducer";
import {AProductGetReducer,AProductGetByIdReducer,AProductUpdateByIdReducer,AProductDeleteByIdReducer,AProductAddReducer} from "../Reducer/userReducer/AProductReducer";
const rootReducer = combineReducers(
    {AUserUpdateReducer,
        AUserGetByIdReducer,
        AUserGetReducer,
        AProductAddReducer,
        AProductDeleteByIdReducer,
        AProductGetByIdReducer,
        AProductUpdateByIdReducer,
        AProductGetReducer,
        getMyOrderReducer,
        myOrderReducer,
        removeCartReducer,
        updateCartReducer,
        getCartReducer,
        addToCartReducer,
        LoginReducer,
        LogoutReducer,
        RegisterReducer,
        getUserReducer,
        productReducer,
        productDetailReducer});


export default rootReducer;