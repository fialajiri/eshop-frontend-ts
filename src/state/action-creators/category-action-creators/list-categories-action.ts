import axios from "axios";
import { Dispatch } from "react";
import { CategoryDoc } from "../../../interfaces/models";
import { CategoryActionTypes } from "../../action-types/category-types";
import { CategoryAction } from "../../actions/category-actions";

export const listCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    dispatch({ type: CategoryActionTypes.CATEGORY_LIST_REQUEST });

    try {
      const { data: categories }: { data: CategoryDoc[] } = await axios.get(
        `${process.env.BACKEND_URL}/api/categories`
      );
      dispatch({
        type: CategoryActionTypes.CATEGORY_LIST_SUCCESS,
        payload: categories,
      });
    } catch (err: any) {
      dispatch({
        type: CategoryActionTypes.CATEGORY_LIST_ERROR,
        payload: err.message,
      });
    }
  };
};
