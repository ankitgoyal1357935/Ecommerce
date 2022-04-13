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