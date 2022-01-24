import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { CategoryDoc, ProductDoc } from "../../../interfaces/models";

export interface ProductListState {
  loading: boolean;
  error: string[] | null;
  products: ProductDoc[];
  page:number ;
  pages: number | null;
  category: CategoryDoc | null
}

export const productListInitialState: ProductListState = {
  loading: false,
  error: null,
  products: [],
  page: 0,
  pages: 0,
  category: null
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
      case ProductActionTypes.PRODUCT_LIST_SORT_PRICE_ASC:
        state.products.sort((a, b) => a.price  - b.price)
        return state;
      case ProductActionTypes.PRODUCT_LIST_SORT_PRICE_DESC:
        state.products.sort((a, b) => b.price - a.price)
        return state;
      case ProductActionTypes.PRODUCT_LIST_SORT_A_Z:
        state.products.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()) )
        return state
      case ProductActionTypes.PRODUCT_LIST_SORT_Z_A:
        state.products.sort((a,b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()) )
        return state
      case ProductActionTypes.PRODUCT_LIST_SORT_LATEST:        
        state.products.sort((a,b) => +new Date(b.createdAt) - +new Date(a.createdAt))
        return state;
      case ProductActionTypes.PRODUCT_LIST_SORT_OLDEST:        
        state.products.sort((a,b) => +new Date(a.createdAt) - +new Date(b.createdAt!))
        return state;
      default:
        return state;
    }
  },
  productListInitialState
);
