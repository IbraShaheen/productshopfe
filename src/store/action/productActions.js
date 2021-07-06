//import axios from "axios";
import instance from "./instance";
import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS, UPDATE_PRODUCT } from "./types";
//import instance from "./instance"


export const deleteProduct = (productId) => {
        return async(dispatch)=>{
        try {
            await instance.delete(`/products/${productId}`)
            dispatch({
                type: DELETE_PRODUCT,
                payload: {
                    productId:productId,
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    
}}

export const addProduct = (product , shopId)=> {
    return async(dispatch)=>{
        try {
            const formData= new FormData();
            for(const key in product)
               formData.append(key,product[key])
            
           const res= await instance.post(`/shops/${shopId}/products`,formData)
           
            dispatch({
                type:ADD_PRODUCT,
                payload: {
                    product:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }
        
}}


export const updateProduct = (updatedProduct) => {
    return async(dispatch)=>{
    try {
        const formData= new FormData();
        for(const key in updatedProduct)
           formData.append(key,updatedProduct[key])
        await instance.put(`/products/${updatedProduct.id}`,formData)
        dispatch({
            type: UPDATE_PRODUCT,
            payload: {
                updatedProduct:updateProduct,
            }
        })
    } catch (error) {
        console.log(error.message)
    }

}}

export const fetchProducts = ()=>{
    return async (dispatch)=>{
    try {
        const res = await instance.get("/products");
        console.log(res.data)
        dispatch({
            type:FETCH_PRODUCTS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error.message)
    }
    
}}