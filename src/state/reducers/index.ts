import { combineReducers } from "redux";
import { userLoginReducer } from "./user-reducers/user-login-reducer";
import { productListReducer } from "./product-reducers/product-list-reducer";
import { cartReducer } from "./cart-reducers/cart-reducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  productList: productListReducer,
  cartState: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
