import axios from "axios";



export const AProductGetAction = () =>async(dispatch)=>{

    try{
        dispatch({ type: "APRODUCTGET_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: "http://localhost:7777/api/product/",
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "APRODUCTGET_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "APRODUCTGET_FAILS",payload:error})
    }
}


export const AProductGetByIdAction = (id) =>async(dispatch)=>{

    try{
        dispatch({ type: "APRODUCTGETBYID_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: `http://localhost:7777/api/product/find/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "APRODUCTGETBYID_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "APRODUCTGETBYID_FAILS",payload:error})
    }
}

export const AProductDeleteByIdAction = (id) =>async(dispatch)=>{

    try{
        dispatch({ type: "APRODUCTDELETEBYID_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"DELETE",
            url: `http://localhost:7777/api/product/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "APRODUCTDELETEBYID_SUCCESS", payload: data });
        
    }
    catch (error) {
        dispatch({ type: "APRODUCTDELETEBYID_FAILS",payload:error})
    }
}




export const AProductUpdateByIdAction = (id,product) =>async(dispatch)=>{

    try{
        dispatch({ type: "APRODUCTUPDATEBYID_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"PUT",
            url: `http://localhost:7777/api/product/${id}`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            data:product,
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "APRODUCTUPDATEBYID_SUCCESS", payload: data });
            window.location.reload();
    }
    catch (error) {
        dispatch({ type: "APRODUCTUPDATEBYID_FAILS",payload:error})
    }
}




export const AProductAddAction = (product) =>async(dispatch)=>{

    try{
        dispatch({ type: "APRODUCTADD_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"POST",
            url: `http://localhost:7777/api/product`,
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            data:product,
            responseType: "json",
        
        }
        const {data} = await axios(config);
            console.log(data);
        dispatch({ type: "APRODUCTADD_SUCCESS", payload: data });
            window.location.reload();
    }
    catch (error) {
        dispatch({ type: "APRODUCTADD_FAILS",payload:error})
    }
}