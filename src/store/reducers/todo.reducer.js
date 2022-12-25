import { Cast } from "@mui/icons-material";

const Initial_State = {
  User_data: [],
};

export const todoreducers = (state = Initial_State, action) => {
  // 
  switch (action.type) {
    case "ADD_DATA":
      console.log("action.payload", action.payload);
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };

    case "RMV_DATA": {
      const dltdata = state.User_data.filter((el, k) => {
        return k !== action.payload;
      });
      return {
        ...state,
        User_data: dltdata,
      };
    }

    case "UPDATE_DATA": {
      const updatedata = state.User_data.map((el, k) => {
        return k === action.id ? action.payload : el;
      });

      return {
        ...state,
        User_data: updatedata,
      };
    }

    default:
      return state;
  }
};
