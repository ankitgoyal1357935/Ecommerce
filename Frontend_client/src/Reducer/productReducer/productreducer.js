import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAN_ERRORS,
} from "../../Constant/productconstant";


export const productReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case "ALL_PRODUCT_REQUEST":
            return {
                loading: true,
                product: []
            }

        case "ALL_PRODUCT_SUCCESS":
            return {
                loading: false,
                product: action.payload.products,
               
            }
        case "ALL_PRODUCT_FAIL":
            return {
                loading: false,
                error: action.payload
            }

        case "CLEAN_ERRORS":
            return {
                ...state,
                error: null
            }

            default: return state;
    }
}   


export const productDetailReducer = (state = { product: {} }, action) => {

    switch (action.type) {
        case "PRODUCT_DETAIL_REQUEST":
            return {
                loading: true,
                ...state,
            }

        case "PRODUCT_DETAIL_SUCCESS":
            return {
                loading: false,
                product: action.payload,
               
            }
        case "PRODUCT_DETAIL_FAIL":
            return {
                loading: false,
                error: action.payload
            }

        case "CLEAN_ERRORS":
            return {
                ...state,
                error: null
            }

            default: return state;
    }
}   