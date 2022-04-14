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


export const AUserGetByIdAction = (id) =>async(dispatch)=>{

    try{
        dispatch({ type: "AUSERGETBYID_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: `http://localhost:7777/api/user/find/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "AUSERGETBYID_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "AUSERGETBYID_FAILS",payload:error})
    }
}

export const AUserDeleteByIdAction = (id) =>async(dispatch)=>{

    try{
        dispatch({ type: "AUSERDELETEBYID_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"DELETE",
            url: `http://localhost:7777/api/user/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "AUSERDELETEBYID_SUCCESS", payload: data });
        
    }
    catch (error) {
        dispatch({ type: "AUSERDELETEBYID_FAILS",payload:error})
    }
}




export const AUserUpdateAction = (id,user) =>async(dispatch)=>{

    try{
        dispatch({ type: "AUSERUPDATE_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"PUT",
            url: `http://localhost:7777/api/user/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            data:user,
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "AUSERUPDATE_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "AUSERUPDATE_FAILS",payload:error})
    }
}