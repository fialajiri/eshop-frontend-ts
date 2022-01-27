import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import axios from "axios";
import { Dispatch } from "react";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const deleteProduct = (productId: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_DELETE_REQUEST });

    try {
      await axios.delete(
        `${process.env.BACKEND_URL}/api/products/${productId}`, AXIOS_CONFIG
      );
      dispatch({ type: ProductActionTypes.PRODUCT_DELETE_SUCCESS });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_DELETE_ERROR,
        payload: err.message,
      });
    }
  };
};
