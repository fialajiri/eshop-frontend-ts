import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import axios from "axios";
import { Dispatch } from "react";
import { ProductDoc } from "../../../interfaces/models";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export interface UpdateProductData {
  productId: string;
  name: string;
  image: string;
  categories: string[];
  description: string;
  price: number;
  countInStock: number;
}

export const updateProduct = (inputs: UpdateProductData) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_UPDATE_REQUEST });

    try {
      const { data: product }: { data: ProductDoc } = await axios.put(
        `${process.env.BACKEND_URL}/api/products/${inputs.productId}`,
        { ...inputs },
        AXIOS_CONFIG
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
        payload: product,
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_UPDATE_ERROR,
        payload: err.message,
      });
    }
  };
};
