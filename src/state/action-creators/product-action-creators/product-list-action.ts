import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import { CategoryDoc, ProductDoc } from "../../../interfaces/models";
import axios from "axios";
import { Dispatch } from "react";

export const listProducts = (
  keyword: string = "",
  categoryId: string = "",
  pageNumber: number = 1
) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_REQUEST,
    });

    try {
      const {
        data: { products, page, pages, category },
      }: {
        data: {
          products: ProductDoc[];
          page: number;
          pages: number;
          category: CategoryDoc | null;
        };
      } = await axios.get(
        `${process.env.BACKEND_URL}/api/products?keyword=${keyword}&categoryId=${categoryId}&pageNumber=${pageNumber}`
      );

      console.log(category)
      
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: {
          products,
          page,
          pages,
          category,
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
