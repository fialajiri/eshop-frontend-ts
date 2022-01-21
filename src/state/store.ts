import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from './reducers'

export const middlewares = [thunk]

export const store = createStore(
    reducers, 
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
)


