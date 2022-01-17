import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../state/action-creators/user-action-creators";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators({...userActionCreators}, dispatch);
  }, [dispatch]);
};
