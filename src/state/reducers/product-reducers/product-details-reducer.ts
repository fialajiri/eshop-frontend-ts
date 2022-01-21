import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";

export interface ProductDetailsState {
  loading: boolean;
  error: string[] | null;
  product: ProductDoc | null;
}

export const productDetailsInitialState: ProductDetailsState = {
  loading: false,
  error: null,
  product: null,
};

export const productDetailsReducer = produce(
  (
    state: ProductDetailsState = productDetailsInitialState,
    action: ProductAction
  ): ProductDetailsState => {
    switch (action.type) {
      case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
        state.loading = true;
        return state;
      case ProductActionTypes.PRODUCT_DETAILS_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
        state.loading = false;
        state.product = action.payload;
        return state;

      default:
        return state;
    }
  },
  productDetailsInitialState
);
