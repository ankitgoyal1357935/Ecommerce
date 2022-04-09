
export const myOrderReducer= (state={},action)=>{

        switch(action.type){
            case "CREATE_ORDER_REQUEST":
                return {
                    loading:true,
                    order:{}
                }
            case "CREATE_ORDER_SUCCESS":
                return{
                    loading:false,
                    order:action.payload
                }
            case "CREATE_ORDER_FAIL":
                return{
                    loading:false,
                    error:action.payload,
                }

                default :return state
                

        }

}