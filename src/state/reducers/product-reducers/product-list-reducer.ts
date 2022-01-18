import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";

export interface ProductListState {
  loading: boolean;
  error: string[] | null;
  products: ProductDoc[] | null;
}

export const productListInitialState: ProductListState = {
  loading: false,
  error: null,
  products: null,
};

export const productListReducer = (
  state: ProductListState = productListInitialState,
  action: ProductAction
): ProductListState => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      state.loading = true;
      state.error = null;
      return state;
    case ProductActionTypes.PRODUCT_LIST_ERROR:
      state.loading = false;
      state.error = action.payload;
      return state;
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      state.loading = false;
      state.products = action.payload;
      return state;
    default:
      return state;
  }
};
