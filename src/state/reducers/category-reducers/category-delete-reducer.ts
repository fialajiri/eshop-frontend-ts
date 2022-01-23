import produce from "immer";
import { CategoryAction } from "../../actions/category-actions";
import { CategoryActionTypes } from "../../action-types/category-types";

export interface CategoryDeleteState {
  loading: boolean;
  error: string[] | null;
  success: boolean;
}

export const categoryDeleteInitialState: CategoryDeleteState = {
  loading: false,
  error: null,
  success: false,
};

export const categoryDeleteReducer = produce(
  (
    state: CategoryDeleteState = categoryDeleteInitialState,
    action: CategoryAction
  ) => {
    switch (action.type) {
      case CategoryActionTypes.CATEGORY_DELETE_REQUEST:
        state.loading = true;
        return state;
      case CategoryActionTypes.CATEGORY_DELETE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case CategoryActionTypes.CATEGORY_DELETE_SUCCESS:
        state.loading = false;
        state.success = true;
      default:
        return state;
    }
  },
  categoryDeleteInitialState
);
