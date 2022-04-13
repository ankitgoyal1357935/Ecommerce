
 export const LoginReducer =(state = {user:{}},action) =>{

    switch (action.type){
        case "LOGIN_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "LOGIN_SUCCESS": return{

                loading:false,
                isAuthenticated:action.payload.success,
                user:action.payload.user,
                token:action.payload.token
            }  
             
            case "LOGIN_FAILS": return{

                loading:false,
                isAuthenticated:action.payload.success,
                user:null,
            }  
             
                
                default: return state;
    }

}



export const RegisterReducer =(state = {user:{}},action) =>{

    switch (action.type){
        case "REGISTER_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "REGISTER_SUCCESS": return{

                loading:false,
                isRegistered:action.payload.success,
                user:action.payload.user
            }  
             
            case "REGISTER_FAILS": return{

                loading:false,
                isRegistered:action.payload.success,
                user:null,
                error:action.payload.error,

            }  
             
                
                default: return state;
    }

}



export const LogoutReducer =(state = {message: ""},action) =>{

    switch (action.type){
        case "LOGOUT_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "LOGOUT_SUCCESS": return{

                loading:false,
                isAuthenticated:false,
                message:action.payload.message,
            }  
             
            case "LOGOUT_FAILS": return{

                loading:false,
                error:action.payload.error,
            }  
             
                
                default: return state;
    }

}


export const getUserReducer = (state = { user:{}}, action) =>{

    switch (action.type){
        case "GETUSER_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "GETUSER_SUCCESS": return{

                loading:false,
                user:action.payload.user,
                message:action.payload.message,
            }  
             
            case "GETUSER_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}