import { combineReducers } from "redux";
import { todoreducers } from "./todo.reducer";

const rootReducer = combineReducers({
  todoreducers,
});

export default rootReducer;
