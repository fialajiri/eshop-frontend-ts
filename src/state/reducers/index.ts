import { combineReducers } from "redux";
import { userLoginReducer } from "./user-reducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
