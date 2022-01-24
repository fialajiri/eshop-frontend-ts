import { combineReducers } from "redux";
import { productListReducer } from "./product-reducers/product-list-reducer";
import { productDetailsReducer } from "./product-reducers/product-details-reducer";
import { productCreateReducer } from "./product-reducers/product-create-reducer";
import { productUpdateReducer } from "./product-reducers/product-update-reducer";
import { productDeleteReducer } from "./product-reducers/product-delete-reducer";
import { categoryListReducer } from "./category-reducers/category-list-reducer";
import { categoryCreateReducer } from "./category-reducers/category-create-reducer";
import { categoryDeleteReducer } from "./category-reducers/category-delete-reducer";
import { cartReducer } from "./cart-reducers/cart-reducer";
import { userLoginReducer } from "./user-reducers/user-login-reducer";
import { userRegisterReducer } from "./user-reducers/user-register-reducer";
import { userDetailsReducer } from "./user-reducers/user-details-reducer";
import { userDeleteReducer } from "./user-reducers/user-delete-reducer";
import { userListReducer } from "./user-reducers/user-list-reducer";
import { userUpdateProfileReducer } from "./user-reducers/user-update-profile-reducer";
import { userUpdateReducer } from "./user-reducers/user-update-reducer";
import { getCurrentUserReducer } from "./user-reducers/user-get-current-reducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  userCurrent: getCurrentUserReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  cartState: cartReducer,
  categoryList: categoryListReducer,
  createCategory: categoryCreateReducer,
  deleteCategory: categoryDeleteReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
