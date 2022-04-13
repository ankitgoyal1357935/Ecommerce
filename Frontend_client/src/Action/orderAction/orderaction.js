import axios from "axios";

export const myorder =(order)=>async(dispatch)=>{

    try {
        
   

    dispatch({type:"CREATE_ORDER_REQUEST"});
    const Token = localStorage.getItem("token");
    const config ={
        method:"POST",
        url:"http://localhost:7777/api/orders/new",
        headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
        data:order,
        responseType:"json"
    }

    const {data} = await axios(config);

    dispatch({type:"CREATE_ORDER_SUCCESS",payload:data});

} catch (error) {
        dispatch({type:"CREATE_ORDER_FAIL" ,payload:error.message})
}
}



export const getMyOrder =()=>async(dispatch)=>{

    try {
        
   

    dispatch({type:"GET_ORDER_REQUEST"});
    const Token = localStorage.getItem("token");
    const config ={
        method:"GET",
        url:"http://localhost:7777/api/orders/find",
        headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
        responseType:"json"
    }

    const {data} = await axios(config);

    dispatch({type:"GET_ORDER_SUCCESS",payload:data});

} catch (error) {
        dispatch({type:"GET_ORDER_FAIL" ,payload:error.message})
}
}