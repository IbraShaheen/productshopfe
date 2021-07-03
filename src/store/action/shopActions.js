import { ADD_SHOPS, FETCH_SHOPS } from "./types";
import axios from "axios";
export const fetchShops = ()=>{
    return async (dispatch)=>{
    try {
        const res = await axios.get("http://localhost:8080/shops");
        console.log(res.data)
        dispatch({
            type:FETCH_SHOPS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error.message)
    }
    
}}

export const addShop = (shop)=> {
    return async(dispatch)=>{
        try {
            const formData= new FormData();
            for(const key in shop)
               formData.append(key,shop[key])
            
           const res= await axios.post("http://localhost:8080/shops",formData)
           
            dispatch({
                type:ADD_SHOPS,
                payload: {
                    shop:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }
        
}}