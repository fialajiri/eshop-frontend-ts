import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import axios from "axios";
import { Dispatch } from "react";
import { ProductDoc } from "../../../interfaces/models";

export interface CreateProductData {
  name: string;
  image: string;
  categories: string[];
  description: string;
  price: number;
  countInStock: number;
}

export const createProduct = (inputs: CreateProductData) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_CREATE_REQUEST });

    try {
      const { data: product }: { data: ProductDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/products`,
        { ...inputs }
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
        payload: product,
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_ERROR,
        payload: err.message,
      });
    }
  };
};
