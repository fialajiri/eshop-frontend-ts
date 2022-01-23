import axios from "axios";
import { Dispatch } from "react";
import { CategoryActionTypes } from "../../action-types/category-types";
import { CategoryAction } from "../../actions/category-actions";

export const deleteCategory = (categoryId: string) => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    dispatch({ type: CategoryActionTypes.CATEGORY_DELETE_REQUEST });

    try {
      await axios.delete(
        `${process.env.BACKEND_URL}/api/categories/${categoryId}`
      );
      dispatch({ type: CategoryActionTypes.CATEGORY_DELETE_SUCCESS });
    } catch (err: any) {
      dispatch({
        type: CategoryActionTypes.CATEGORY_DELETE_ERROR,
        payload: err.message,
      });
    }
  };
};
