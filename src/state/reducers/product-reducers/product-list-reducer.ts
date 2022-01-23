import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";

export interface ProductListState {
  loading: boolean;
  error: string[] | null;
  products: ProductDoc[] | null;
  page:number ;
  pages: number | null;
  category: string | undefined
}

export const productListInitialState: ProductListState = {
  loading: false,
  error: null,
  products: null,
  page: 0,
  pages: 0,
  category: undefined
};

export const productListReducer = produce(
  (
    state: ProductListState = productListInitialState,
    action: ProductAction
  ): ProductListState => {
    switch (action.type) {
      case ProductActionTypes.PRODUCT_LIST_REQUEST:
        state.loading = true;
        return state;
      case ProductActionTypes.PRODUCT_LIST_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_LIST_SUCCESS:
        state.loading = false;
        state.products = action.payload.products;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.category = action.payload.category
        return state;
      default:
        return state;
    }
  },
  productListInitialState
);
