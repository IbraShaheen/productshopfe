import axios from "axios"




export const signup = (userData ,history)=>{
    return async(dispatch)=>{
        try {
            await axios.post(`http://localhost:8080/signup`, userData)
            history.replace("/")
        } catch (error) {
            console.log(error.message)
        }
    }
}









// import axios from "axios"
// import { SIGNUP } from "./types"



// export const signup = (userData ,history)=>{
//     return async(dispatch)=>{
//         try {
//             await axios.post(`http://localhost:8080/signup`, userData)
//             dispatch({
//                 type:SIGNUP,
//             })
//             history.push("/")
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }