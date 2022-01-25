import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from ".";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const middlewares = [thunk];

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);
