import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import { Dispatch } from "react";
import { SortBY } from "../../../interfaces/sort-enum";

export const sortProducts = (sortBy: SortBY) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    if (sortBy === SortBY.PRICE_ASCENDING) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_PRICE_ASC });
    }
    if (sortBy === SortBY.PRICE_DESCENDING) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_PRICE_DESC });
    }
    if (sortBy === SortBY.A_Z) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_A_Z });
    }
    if (sortBy === SortBY.Z_A) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_Z_A });
    }
    if (sortBy === SortBY.LATEST) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_LATEST });
    }
    if (sortBy === SortBY.OLDEST) {
      dispatch({ type: ProductActionTypes.PRODUCT_LIST_SORT_OLDEST });
    }
  };
};
