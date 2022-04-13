
export const addToCartReducer = (state = { cart:[] }, action) => {

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




export const getCartReducer = (state = {products:[]}, action) => {

    switch (action.type) {
        case "GET_CART_REQUEST":
            return {
                ...state,
                loading: true,
                
            }
        case "GET_CART_SUCCESS":
            return {
                loading:false,
                products: action.payload.products,
                
            }
        case "GET_CART_FAIL":
            return {
                loading:false,
                error : action.payload
            }    

        default: return state;
    }

}





export const updateCartReducer = (state = { cart:[] }, action) => {

    switch (action.type) {
        case "UPDATE_CART_REQUEST":
            return {
                ...state,
                loading: true,
                
            }
        case "UPDATE_CART_SUCCESS":
            return {
                loading:false,
                cart: action.payload.cart,
            }
        case "UPDATE_CART_FAIL":
            return {
                loading:false,
                error : action.payload, 
            }    

        default: return state;
    }

}


export const removeCartReducer = (state={cart:[]},action) =>{

    switch(action.type){
        case "DELETE_CART_REQUEST": return { 
                ...state,
                loading:true
        }
        case "DELETE_CART_SUCCESS": return { 

            loading:false,
            cart: action.payload.cart.products
        }
        case "DELETE_CART_FAIL": return { 
                loading:false,
                error:action.payload
    }

        default: return state;


}


}

