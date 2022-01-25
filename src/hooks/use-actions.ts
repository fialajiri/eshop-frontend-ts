import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../state/action-creators/user-action-creators";
import * as cartActionCreators from "../state/action-creators/cart-action-creators";
import * as productActionCreators from "../state/action-creators/product-action-creators";
import * as categoryActionsCreators from "../state/action-creators/category-action-creators";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(
      {
        ...userActionCreators,
        ...cartActionCreators,
        ...productActionCreators,
        ...categoryActionsCreators,
      },
      dispatch
    );
  }, [dispatch]);
};
