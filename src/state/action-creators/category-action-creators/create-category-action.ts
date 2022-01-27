import axios from "axios";
import { Dispatch } from "react";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";
import { CategoryDoc } from "../../../interfaces/models";
import { CategoryActionTypes } from "../../action-types/category-types";
import { CategoryAction } from "../../actions/category-actions";

export const createCategory = (categoryName: string) => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    dispatch({ type: CategoryActionTypes.CATEGORY_CREATE_REQUEST });

    try {
      const { data: category }: { data: CategoryDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/categories`,
        { name: categoryName },
        AXIOS_CONFIG
      );
      dispatch({
        type: CategoryActionTypes.CATEGORY_CREATE_SUCCESS,
        payload: category,
      });
    } catch (err: any) {
      dispatch({
        type: CategoryActionTypes.CATEGORY_CREATE_ERROR,
        payload: err.message,
      });
    }
  };
};
