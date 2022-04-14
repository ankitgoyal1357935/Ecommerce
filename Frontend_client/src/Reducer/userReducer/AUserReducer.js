export const AUserGetReducer = (state = { users:[]}, action) =>{

    switch (action.type){
        case "AUSERGET_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "AUSERGET_SUCCESS": return{

                loading:false,
                users:action.payload,
                
            }  
             
            case "AUSERGET_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}


export const AUserGetByIdReducer = (state = { user:{}}, action) =>{

    switch (action.type){
        case "AUSERGETBYID_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "AUSERGETBYID_SUCCESS": return{

                loading:false,
                user:action.payload,
                
            }  
             
            case "AUSERGETBYID_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}



export const AUserDeleteByIdReducer = (state = { user:{}}, action) =>{

    switch (action.type){
        case "AUSERDELETEBYID_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "AUSERDELETEBYID_SUCCESS": return{

                loading:false,
                user:action.payload,
                
            }  
             
            case "AUSERDELETEBYID_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}



export const AUserUpdateReducer = (state = { user:{}}, action) =>{

    switch (action.type){
        case "AUSERUPDATE_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "AUSERUPDATE_SUCCESS": return{

                loading:false,
                user:action.payload.updateUser,
                
            }  
             
            case "AUSERUPDATE_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}