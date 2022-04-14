export const AProductGetReducer = (state = { products:[]}, action) =>{

    switch (action.type){
        case "APRODUCTGET_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "APRODUCTGET_SUCCESS": return{

                loading:false,
                products:action.payload.products,
                
            }  
             
            case "APRODUCTGET_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}


export const AProductGetByIdReducer = (state = { product:{}}, action) =>{

    switch (action.type){
        case "APRODUCTGETBYID_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "APRODUCTGETBYID_SUCCESS": return{

                loading:false,
                product:action.payload,
                
            }  
             
            case "APRODUCTGETBYID_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}



export const AProductDeleteByIdReducer = (state = { product:{}}, action) =>{

    switch (action.type){
        case "APRODUCTDELETEBYID_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "APRODUCTDELETEBYID_SUCCESS": return{

                loading:false,
                product:action.payload,
                
            }  
             
            case "APRODUCTDELETEBYID_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}



export const AProductUpdateByIdReducer = (state = { product:{}}, action) =>{

    switch (action.type){
        case "APRODUCTUPDATEBYID_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "APRODUCTUPDATEBYID_SUCCESS": return{

                loading:false,
                product:action.payload,
                
            }  
             
            case "APRODUCTUPDATEBYID_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}



export const AProductAddReducer = (state = { product:{}}, action) =>{

    switch (action.type){
        case "APRODUCTADD_REQUEST": return {
                ...state,
                loading:true,
                
        }
            

            case "APRODUCTADD_SUCCESS": return{

                loading:false,
                product:action.payload,
                
            }  
             
            case "APRODUCTADD_FAILS": return{

                loading:false,
                error:action.payload,
            }  
             
                
                default: return state;
    }

}