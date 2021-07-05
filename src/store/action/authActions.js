
import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";



// export const signup = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signup = (userData, history) => {
    return async (dispatch) => {
      try {
        const res = await instance.post("/signup", userData);
        dispatch(setUser(res.data.token));
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  };


// export const signin = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signin", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signin = (userData, history) => {
    return async (dispatch) => {
      try {
        const res = await instance.post("/signin", userData);
        dispatch(setUser(res.data.token));
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  
  
  export const signout = (history) =>{
      history.push("/");
      return setUser()
    }



    export const checkForToken = (token) => {
    
       token = localStorage.getItem("myToken")
    
        if(token) {
         //check if token expiered or not when the user refresh the page
            const currentTime = Date.now();
            const user = decode(token)
    
            if(user.exp > currentTime){
                return setUser(token)
            }
             
        } 
        return setUser()
    }

    

const setUser = (token) => {

    if(token) {
        localStorage.setItem("myToken", token)
        return{
            type: SET_USER,
            payload: decode(token)
        }
    } else {
        localStorage.removeItem("myToken")
        return{
            type: SET_USER,
            payload: null
        }
    }

}
