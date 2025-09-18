import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";
import axios from 'axios';


export const fetchRequest = () =>{
    return {
        type: FETCH_REQUEST
    }

}

export const fetchSuccess = (products) =>{
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

export const fetError = (error) =>{
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchProducts = ()=>{
    return (dispatch) =>{
        dispatch(fetchRequest())
        axios.get("https://fakestoreapi.com/products")
        .then ( res =>{
            const products = res.data.map(prod => prod.title);
            dispatch(fetchSuccess(products))
        })
        .catch(err =>{
            dispatch(fetError(err.message));
        })
    }
}