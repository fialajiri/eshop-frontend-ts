import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import { ProductDoc } from "../../../interfaces/models";
import axios from "axios";
import { Dispatch } from "react";

export const listProducts = (
  keyword: string = "",
  category: string = "",
  pageNumber: number = 1
) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_REQUEST,
    });

    try {
      const {
        data: { products, page, pages, categoryName },
      }: {
        data: {
          products: ProductDoc[];
          page: number;
          pages: number;
          categoryName: string;
        };
      } = await axios.get(
        `${process.env.BACKEND_URL}/api/products?keyword=${keyword}&category=${category}&pageNumber=${pageNumber}`
      );
      
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: {
          products,
          page,
          pages,
          category: categoryName,
        },
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_ERROR,
        payload: err.message,
      });
    }
  };
};
