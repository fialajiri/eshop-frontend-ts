import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import { ProductDoc } from "../../../interfaces/models";
import axios from "axios";
import { Dispatch } from "react";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const productDetails = (productId: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_DETAILS_REQUEST });

    try {
      const { data: product }: { data: ProductDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/products/${productId}`,
        AXIOS_CONFIG
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
        payload: product,
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_DETAILS_ERROR,
        payload: err.message,
      });
    }
  };
};
