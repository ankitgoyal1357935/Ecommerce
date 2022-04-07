

const getCartReducer = (state = {products:[]}, action) => {

    switch (action.type) {
        case "GET_CART_REQUEST":
            return {
                ...state,
                loading: true,
                
            }
        case "GET_CART_SUCCESS":
            return {
                loading:false,
                cart: action.payload.products,
            }
        case "GET_CART_FAIL":
            return {
                loading:false,
                error : action.payload
            }    

        default: return state;
    }

}

export default getCartReducer;