import axios from "axios";



export const AUserGetAction = () =>async(dispatch)=>{

    try{
        dispatch({ type: "AUSERGET_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: "http://localhost:7777/api/user/",
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "AUSERGET_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "AUSERGET_FAILS",payload:error})
    }
}



export const AUserUpdateAction = (id,user) =>async(dispatch)=>{

    try{
        dispatch({ type: "AUSERGET_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: `http://localhost:7777/api/user/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "AUSERGET_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "AUSERGET_FAILS",payload:error})
    }
}