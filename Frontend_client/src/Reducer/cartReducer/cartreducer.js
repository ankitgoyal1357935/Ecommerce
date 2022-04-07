

const addToCartReducer = (state = { products:[] }, action) => {

    switch (action.type) {
        case "ADD_CART_REQUEST":
            return {
                ...state,
                loading: true,
                
            }
        case "ADD_CART_SUCCESS":
            return {
                loading:false,
                cart: action.payload.cart,
            }
        case "ADD_CART_FAIL":
            return {
                loading:false,
                error : action.payload, 
            }    

        default: return state;
    }

}

export default addToCartReducer;