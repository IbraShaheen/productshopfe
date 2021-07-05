// import { SET_USER } from "../action/types";

// const initialState = {
//   user: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default authReducer;

import { SET_USER } from "../action/types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;