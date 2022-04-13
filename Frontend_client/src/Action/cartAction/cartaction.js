import axios from "axios";


export const addCart = (product) => async (dispatch) => {
        try{

            dispatch({type:"ADD_CART_REQUEST"});

                const Token = localStorage.getItem("token");
            const config ={
                method:"POST",
                url:"http://localhost:7777/api/cart",
                headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
                data:product,
                responseType:"json"
            }
            
            const {data} = await axios(config);
            console.log(data);
            dispatch({type:"ADD_CART_SUCCESS",payload:data});
            dispatch(getCart());
        
        }catch(error){
                dispatch({type:"ADD_CART_FAIL",payload:error.response.data.message});

        }
    
}


export const getCart = () => async (dispatch) => {
    try{

        dispatch({type:"GET_CART_REQUEST"});
            const Token = localStorage.getItem("token");
    
        const config ={
            method:"GET",
            url:"http://localhost:7777/api/cart/find",
            headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
            responseType:"json",
        }
        
        const {data} = await axios(config);
        console.log(data.cart);
        dispatch({type:"GET_CART_SUCCESS", payload:data.cart});
    }catch(error){
            dispatch({type:"GET_CART_FAIL",payload:error});

    }

}



export const updateCart = (product) => async (dispatch) => {
    try{

        dispatch({type:"UPDATE_CART_REQUEST"});

            const Token = localStorage.getItem("token");
        const config ={
            method:"PUT",
            url:"http://localhost:7777/api/cart",
            headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
            data:product,
            responseType:"json"
        }
        
        const {data} = await axios(config);
        console.log(data);
        dispatch({type:"UPDATE_CART_SUCCESS",payload:data});
        dispatch(getCart());
    
    }catch(error){
            dispatch({type:"UPDATE_CART_FAIL",payload:error.response.data.message});

    }

}


export const removeCart = (id) => async(dispatch)=>{

    try{

        dispatch({type:"DELETE_CART_REQUEST"});

            const Token = localStorage.getItem("token");
        const config ={
            method:"DELETE",
            url:`http://localhost:7777/api/cart/product/${id}`,
            headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
            responseType:"json"
        }
        
        const {data} = await axios(config);
        console.log(data);
        dispatch({type:"DELETE_CART_SUCCESS",payload:data});
        dispatch(getCart());
    
    }catch(error){
            dispatch({type:"DELETE_CART_FAIL",payload:error});

    }


}