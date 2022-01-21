import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import { ProductDoc } from "../../../interfaces/models";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

export const listProducts = () => {
  return async (dispatch:  ThunkDispatch<any, any, ProductAction>) => {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_REQUEST,
    });

    try {
      const { data }: { data: ProductDoc[] } = await axios.get(
        `${process.env.BACKEND_URL}/api/products`
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_ERROR,
        payload: err.message,
      });
    }
  };
};
