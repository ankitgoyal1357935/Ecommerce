
import axios from "axios";



export const getUserAction = () =>async(dispatch)=>{

    try{
        dispatch({ type: "GETUSER_REQUEST"});

        const Token = localStorage.getItem("token");
        const config={
            method:"GET",
            url: "http://localhost:7777/api/auth/account/me",
            headers: { token:`Bearer ${Token}`,'Accept': 'application/json', 'Content-Type': 'application/json' },
            responseType: "json",
        
        }
        const {data} = await axios(config);
        dispatch({ type: "GETUSER_SUCCESS", payload: data });

    }
    catch (error) {
        dispatch({ type: "GETUSER_FAILS",payload:error})
    }
}


export const LoginAction = (user)=>async(dispatch)=>{


        try{

            dispatch({type:"LOGIN_REQUEST"});

            const config={
                method:"POST",
                url: "http://localhost:7777/api/auth/login",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                data:user,
                responseType: "json",
            
            }
            const {data} = await axios(config);
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
        
        } catch (error) {
          dispatch({ type: "LOGIN_FAIL", payload: error });
        }


    }



    export const RegisterAction = (user)=>async(dispatch)=>{

        try{

            dispatch({type:"REGISTER_REQUEST"});

            const config={
                method:"POST",
                url: "http://localhost:7777/api/auth/register",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                data:user,
                responseType: "json",
            
            }
            const {data} = await axios(config);
            dispatch({ type: "REGISTER_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "REGISTER_FAIL", payload: error });
        }


    }



    export const LogoutAction = ()=>async(dispatch)=>{

        try{

            dispatch({type:"LOGOUT_REQUEST"});
                       const Token = localStorage.getItem("token");
            const config={
                method:"POST",
                url: "http://localhost:7777/api/auth/logout",
                headers: {token:`Bearer ${Token}` , 'Content-Type': 'application/json' },
                responseType: "json",
            
            }
            const {data} = await axios(config);
            dispatch({ type: "LOGOUT_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "LOGOUT_FAIL", payload: error});
        }


    }

