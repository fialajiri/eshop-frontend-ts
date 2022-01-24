import produce from "immer";
import { CategoryAction } from "../../actions/category-actions";
import { CategoryActionTypes } from "../../action-types/category-types";
import { CategoryDoc } from "../../../interfaces/models";

export interface CategoryListState {
  loading: boolean;
  error: string[] | null;
  categories: CategoryDoc[];
}

export const categoryListInitialState: CategoryListState = {
  loading: false,
  error: null,
  categories: [],
};

export const categoryListReducer = produce(
  (
    state: CategoryListState = categoryListInitialState,
    action: CategoryAction
  ): CategoryListState => {
    switch (action.type) {
      case CategoryActionTypes.CATEGORY_LIST_REQUEST:
        state.loading = true;
        return state;
      case CategoryActionTypes.CATEGORY_LIST_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case CategoryActionTypes.CATEGORY_LIST_SUCCESS:
        state.loading = false;
        state.categories = action.payload;

      default:
        return state;
    }
  },
  categoryListInitialState
);
