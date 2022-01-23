import produce from "immer";
import { CategoryAction } from "../../actions/category-actions";
import { CategoryActionTypes } from "../../action-types/category-types";
import { CategoryDoc } from "../../../interfaces/models";

export interface CategoryCreateState {
  loading: boolean;
  error: string[] | null;
  success: boolean;
  category: CategoryDoc | null;
}

export const categoryCreateInitialState: CategoryCreateState = {
  loading: false,
  error: null,
  success: false,
  category: null,
};

export const categoryCreateReducer = produce(
  (
    state: CategoryCreateState = categoryCreateInitialState,
    action: CategoryAction
  ): CategoryCreateState => {
    switch (action.type) {
      case CategoryActionTypes.CATEGORY_CREATE_REQUEST:
        state.loading = true;
        return state;
      case CategoryActionTypes.CATEGORY_CREATE_ERROR:
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        return state;
      case CategoryActionTypes.CATEGORY_CREATE_SUCCESS:
        state.loading = false;
        state.success = true;
        state.category = action.payload;
        return state;
      case CategoryActionTypes.CATEGORY_CREATE_RESET:
        return categoryCreateInitialState;
      default:
        return state;
    }
  },
  categoryCreateInitialState
);
