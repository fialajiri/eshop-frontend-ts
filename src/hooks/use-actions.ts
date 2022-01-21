import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../state/action-creators/user-action-creators/user-login-action";
import * as cartActionCreators from '../state/action-creators/cart-action-creators'
import * as productActionCretors from '../state/action-creators/product-action-creators'



export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators({...userActionCreators, ...cartActionCreators, ...productActionCretors}, dispatch);
  }, [dispatch]);
};
