import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAN_ERRORS
} from "../../Constant/productconstant";
import axios from "axios";



export const getProduct = () => async (dispatch) => {

    try {
        dispatch({ type: "ALL_PRODUCT_REQUEST" });
        const {data} = await axios.get("/api/product");
            console.log(data);
        
        dispatch({
            type:"ALL_PRODUCT_SUCCESS",
            payload: data,
            
        });


    } catch (error) {
        console.log(error);
        dispatch({
            type: "ALL_PRODUCT_FAIL",
            payload: error.response.data.message,
        })
    }


};

export const getProductDetails = (id) => async (dispatch) => {

    try {
        dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
        const {data} = await axios.get(`/api/product/find/${id}`);
            console.log(data);
        
        dispatch({
            type:"PRODUCT_DETAIL_SUCCESS",
            payload: data.product,
            
        });


    } catch (error) {
        console.log(error);
        dispatch({
            type: "PRODUCT_DETAIL_FAIL",
            payload: error.response.data.message,
        })
    }


};

export const cleanErrors = async(dispatch) => {
    dispatch({ 
        type:"CLEAN_ERRORS",
    })
}


